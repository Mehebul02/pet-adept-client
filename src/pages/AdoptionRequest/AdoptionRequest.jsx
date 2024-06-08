import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../shared/Container";
import toast from "react-hot-toast";
import LoadingSpinner from "../shared/loadingSpinner/LoadingSpinner";

const AdoptionRequest = () => {
    const {user,loading}= useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:myRequests=[],isLoading,refetch}=useQuery({
        queryKey:['myRequests'],
        enabled: !loading && !!user?.email,
        queryFn:async()=>{
            const {data}= await axiosSecure.get(`/my-request-adopts/${user?.email}`)
            return data
        }
    })
    console.log(myRequests);
const {mutateAsync }=useMutation({
    mutationFn:async({id,status})=>{
        const {data}= await axiosSecure.patch(`/adopt/${id}`,{status})
        console.log(data);
        return data 
        
    },
  
})
    const handleStatus=async(id, prevStatus, status)=>{
       
await mutateAsync({id,status})
         refetch()
    }
    if (isLoading) return <LoadingSpinner/>

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
                         Phone
                      </th>

                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                     Location
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Status
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Action
                      </th>
                    
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                  
                     {
                      myRequests.map((myRequest,indx)=> <tr key={indx}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {indx+1}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       {myRequest.adoptName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {myRequest.adoptEmail}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      {myRequest.adoptPhone}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      {myRequest.adoptLocation}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            myRequest.status === 'request' &&
                            'bg-yellow-100/60 text-red-600 font-poppins'
                          }  `}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              myRequest.status === 'requested' && 'bg-yellow-500'
                            }     `}
                          ></span>
                          <h2 className='text-sm font-normal '>{myRequest.status}</h2>
                        </div>
                      {/* <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              myRequest.status === 'request' && 'bg-blue-500'
                            } ${
                                myRequest.status === 'requested' && 'bg-blue-500'
                              }  `}
                          ></span> */}
                      {/* {myRequest.status} */}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {/* accept button  */}
                      <button onClick={()=>handleStatus(myRequest._id,myRequest.status,'request')}>
                      <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 12.75 6 6 9-13.5'
                              />
                            </svg>
                      </button>
                      {/* reject button */}
                      <button onClick={()=>handleStatus(myRequest._id,myRequest.status,'requested')}>
                      <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                              />
                            </svg>
                      </button>
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

export default AdoptionRequest;