import { Link } from "react-router-dom";
import LoadingSpinner from "../shared/loadingSpinner/LoadingSpinner";
import Skeleton from "../../components/skeleton/Skeleton";

const PetCard = ({pet,isLoading}) => {
    const {_id,name,image,location,age}=pet
    
    return (
      
        <div className="group cursor-pointer">
            <div className="max-w-sm border p-4 rounded-xl overflow-hidden shadow-lg m-4 group-hover:scale-110 transition">
        <img className="w-full h-48 object-cover rounded-lg" src={image} alt='' />
        <div className="flex justify-between px-6 mt-3">
          <div className="font-semibold font-poppins text-xl  mb-2">{name}</div>
          <p className="text-gray-700 font-poppins font-medium text-base"> Age: {age}</p>
        </div>
          <p className="px-6  text-gray-700 text-base font-poppins"><span className='text-orange-600'>Location</span>: {location}</p>
        <div className="px-6 pt-4 pb-2">
          <Link to={`/details/${_id}`}>
          <button className="bg-green-500 hover:bg-[#F69B03] text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
          </Link>
        </div>
      </div> 
        </div>
        
    );
};

export default PetCard;