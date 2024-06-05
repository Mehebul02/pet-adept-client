import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyPet = () => {
  const axiosSecure = useAxiosSecure();
  const { user,loading } = useAuth();
  const { data:pet=[] ,isLoading,refetch,} = useQuery({
    queryKey:['pet',user?.email],
    enabled: !loading && !!user?.email,
    queryFn:async()=>{
        const {data}=await axiosSecure.get(`/pet?email=${user?.email}`)
        return data
    }
  });
  return [pet,isLoading,refetch];
};

export default useMyPet;
