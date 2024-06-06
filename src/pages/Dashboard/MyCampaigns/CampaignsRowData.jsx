import { useState } from "react";
import { TiEdit } from "react-icons/ti";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CampaignsRowData = ({campaign,indx,refetch}) => {
    const [showModal, setShowModal] = useState(false);
    const axiosSecure =useAxiosSecure()
    const handleStatus =status=>{
        console.log(status);
        axiosSecure.patch(`/status-update/${status}`)
        .then(res=>{
            console.log(res.data);
        refetch()
        })
    }
    return (
        <>
           <tr>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {indx+1}
                      </td>
  
  
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      {campaign.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       
                       ${campaign.maximumDonate}
                      </td>
  
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      Donation Progress
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button onClick={()=>handleStatus(campaign._id)}  className="btn-link">{campaign.status}</button>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button  className="btn-link"><TiEdit></TiEdit> </button>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button onClick={()=>setShowModal(true)} className="btn-link">View Donators </button>
                      </td>
                    
                      </tr>
        {/* Donation Modal */}
        <div className={`fixed inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        
          </span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                {/* <h1 className="block text-gray-700 text-sm font-bold m-2"> Pet name: {donation?.name}</h1> */}
                 
                
                        <label htmlFor="donationAmount" className="block font-poppins text-sm font-bold m-2">
                        Donate Amount: $23
                         
                        </label>
                        <label htmlFor="donationAmount" className="block font-poppins text-sm font-bold m-2">
                        Date: 23-06-24
                         
                        </label>
                    
                
                </div>
                <div >
                  
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            
          </div>
        </div>
      </div>
       </>
    );
};

export default CampaignsRowData;