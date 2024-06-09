import { BiSolidEdit, BiSolidUserCheck } from "react-icons/bi";
import Container from "../../shared/Container";
import useAllDonation from "../../../hooks/useAllDonation";
import { MdDelete } from "react-icons/md";

const AllDonation = () => {
    const [donations,refetch]=useAllDonation()
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
                        <span>Name</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      Donation Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      Edit
                    </th>

                    <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                     Delete
                    </th>
                    <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                     
                    </th>
                  </tr>
                </thead>
               <tbody className="bg-white divide-y divide-gray-200 ">
                  
                     {
                      donations.map((donation,indx)=> <tr key={indx}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {indx+1}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       {donation.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       ${donation.donate}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    <button><BiSolidEdit className="text-2xl"/></button>
                      </td>
                      <td className="px-4 py-4 text-md whitespace-nowrap">
                 
                    <button><MdDelete className="text-2xl" /></button>
                      </td>
                      <td className="px-4 py-4 text-md whitespace-nowrap">
                 Status
                     
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

export default AllDonation;