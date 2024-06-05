import { Link } from "react-router-dom";
import useMyPet from "../../../hooks/useMyPet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";

const MyAddedPets = () => {
  const axiosSecure = useAxiosSecure()
  const [pet,isLoading,refetch]=useMyPet()
  if(isLoading){
    return <LoadingSpinner/>
  }
  console.log(pet);
  const handleDelete=async id=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/pets/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch()
          console.log(res.data);
        });
      }
    });

  }
    return (
        <div>
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
                          <span>Pet Name</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                      >
                        Pet category,
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                      >
                         Pet image
                      </th>

                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Status
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Update
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Delete
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Adopted button
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                  
                     {
                      pet.map((petItem,indx)=> <tr key={indx}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {indx+1}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       {petItem.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {petItem.category}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={petItem.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                       {petItem.status}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <Link to={`/dashboard/updatePets/${petItem._id}`}><button className="btn-link">Update</button></Link>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                   
                   
                    <button onClick={()=>handleDelete(petItem._id)}  className="btn-link text-red-600 font-semibold">Delete</button>
                 
                
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                     <button  className="btn-link text-red-600 font-semibold">Adopted</button>
                      </td>
                    </tr>)
                     }
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default MyAddedPets;