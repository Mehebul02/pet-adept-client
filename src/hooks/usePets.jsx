import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const usePets = () => {
    const axiosCommon = useAxiosCommon()
    const {data:pets=[],isLoading,refetch} =useQuery({
        queryKey:['pets'],
        queryFn:async()=>{
            const {data} = await axiosCommon.get('/pets')
            return data
        }
    })
    return [pets,isLoading,refetch]
};

export default usePets;