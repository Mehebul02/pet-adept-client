import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyDonation = () => {
    const { user ,loading} = useAuth();
    const axiosSecure = useAxiosSecure();
  
    const { data: myDonation = [], isLoading } = useQuery({
        queryKey: ["myDonation"],
        enabled: !loading && !!user?.email,
        queryFn:async()=>{
            const {data} = await axiosSecure.get(`/my-donation/${user?.email}`)
            return data
        }
      });
    return [myDonation,isLoading]
};

export default useMyDonation;