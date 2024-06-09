import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllDonation = () => {
    const axiosSecure = useAxiosSecure()
    const {data:donations=[],refetch}=useQuery({
        queryKey:['donations'],
        queryFn:async()=>{
            const {data} = await axiosSecure('/donation')
            return data
        }
    })
    return [donations,refetch]
};

export default useAllDonation;