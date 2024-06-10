import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../shared/Container";
import useAuth from "../../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { BiSolidUserCheck } from "react-icons/bi";
import Swal from "sweetalert2";

const AllUsers = () => {
    const {user,loading,}=useAuth()
  const axiosSecure = useAxiosSecure();
  const { data:users=[] ,refetch} = useQuery({
    queryKey: ["users"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allUsers");
      return data;
    },
  });
//   console.log(users);
const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
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
                        <span>Name</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      Profile
                    </th>

                    <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Role
                    </th>
                  </tr>
                </thead>
               <tbody className="bg-white divide-y divide-gray-200 ">
                  
                     {
                      users.map((user,indx)=> <tr key={indx}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {indx+1}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       {user.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user.email}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    <div>
                    <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
                    </div>
                      </td>
                      <td className="px-4 py-4 text-md whitespace-nowrap">
                 
                     {user.role === 'admin' ? 'Admin': <button onClick={()=>handleMakeAdmin(user)}><BiSolidUserCheck className="text-4xl "/></button>}
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

export default AllUsers;
