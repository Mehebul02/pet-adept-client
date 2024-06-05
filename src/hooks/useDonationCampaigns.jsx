import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";

const useDonationCampaigns = () => {
    const {id}=useParams()
    const axiosSecure = useAxiosSecure()
    const { data: donation = {}, isLoading,refetch } = useQuery({
        queryKey: ["donation"],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`/donation-campaign/${id}`);
          return data;
        },
      });
    return [donation,isLoading,refetch]
};

export default useDonationCampaigns;