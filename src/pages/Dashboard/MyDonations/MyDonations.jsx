import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyDonations = () => {
  const { user ,loading} = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myDonation = [], isLoading } = useQuery({
    queryKey: ["myDonation"],
    enabled: !loading && !!user?.email,
    queryFn:async()=>{
        const {data} = await axiosSecure.get(`/my-donation?email=${user?.email}`)
        return data
    }
  });
  console.log(myDonation);
  const handleDelete=id=>{
    console.log(id);
    axiosSecure.delete(`/donation-delete/${id}`)
    .then(res=>{
      console.log(res.data);
    })
  }
  return (
    <Container>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-500">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4  text-left rtl:text-right  text-white font-poppins font-bold text-sm"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>No</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Pet Image</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      Pet Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      Amount
                    </th>

                    <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Refund
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {
                    myDonation.map((donation,indx)=><tr key={indx}>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {indx+1}
                    </td>


                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  w-12 h-12">
                            <img src={donation.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                     
                     {donation.name}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    $ {donation.donate}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button onClick={()=>handleDelete(donation.donationId)} className="btn-link">Refund</button>
                    </td>
                  </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyDonations;
