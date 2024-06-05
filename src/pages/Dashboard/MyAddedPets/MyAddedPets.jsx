import useMyPet from "../../../hooks/useMyPet";

const MyAddedPets = () => {
  // const [pet]=useMyPet()
  // console.log(pet);
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
                  
                      <tr>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          2312
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          title
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          title
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {/* {submit.status} */}
                          {/* <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              submit.status === "Pending" && "bg-yellow-500"
                            }  ${submit.status === "Complete" && "bg-green-500"} `}
                          ></span> */}
                          fdsfds
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                         sdfsdfds
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button className="btn-link">Update</button>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                     
                        <button  className="btn-link text-red-600 font-semibold">Delete</button>
                  
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                       <button  className="btn-link text-red-600 font-semibold">Adopted</button>
                        </td>
                      </tr>
                   
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