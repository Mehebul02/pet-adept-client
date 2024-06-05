// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../shared/Container";
import DonationCard from "./DonationCard";
import SkeletonPetsCart from "../../components/skeletonPetsCart/SkeletonPetsCart";
import useDonationCampaigns from "../../hooks/useDonationCampaigns";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const DonationCampaigns = () => {
    const axiosSecure = useAxiosSecure()
    const {data:donations=[],isLoading}= useQuery({
        queryKey:['donations'],
        queryFn:async()=>{
            const {data} = await axiosSecure.get('/donation')
            return data
        }
    })
    // const [donations,isLoading]= useDonationCampaigns()
    if(isLoading){
        return <SkeletonPetsCart/>
    }
    return (
        <Container>
            <div>
             {/* sorted input  */}
          <div className="mx-auto">
            <form >
              <select
                value=""
                name="date"
                id="date"
                className="border-2 p-4 rounded-lg border-green-800"
              >
                <option value="">Sorted By </option>
                <option value="descending">descending</option>
              </select>
            </form>
            {/* <button onClick={()=>SetDec(dec)}>descending</button> */}
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3">
          {
donations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
          }
           </div>
        </div>
        </Container>
    );
};

export default DonationCampaigns;