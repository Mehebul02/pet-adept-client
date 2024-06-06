import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../shared/Container";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import useMyDonation from "../../../hooks/useMyDonation";
import CampaignsRowData from "./CampaignsRowData";
const MyCampaigns = () => {
    const {user}=useAuth()
   
    const axiosSecure = useAxiosSecure()
    const {data:campaigns=[],refetch}=useQuery({
        queryKey:['campaigns'],
        queryFn:async()=>{
            const {data} = await axiosSecure.get(`/my-campaigns/${user?.email}`)
            return data
        }
    })
    // my Donner
   
   
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
                          <span>Pet Name</span>
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
                       Donation 
                      </th>
  
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      Actions
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      edit
                      </th>
                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                      view details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {
                      campaigns.map((campaign,indx)=><CampaignsRowData key={indx} indx={indx} campaign={campaign} refetch={refetch}></CampaignsRowData>)

                    
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

export default MyCampaigns;