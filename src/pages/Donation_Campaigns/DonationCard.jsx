import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { _id, name, image, maximumDonate, donatedAmount } = donation;
  return (
    <div className="group">
      <div className="max-w-sm border p-4 rounded-xl overflow-hidden shadow-lg m-4 group-hover:scale-110 transition">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={image}
          alt=""
        />
        <div className="p-4 space-y-5">
          <h2 className="text-xl font-bold font-poppins mb-2">{name}</h2>
          <div className="flex justify-between text-gray-700 mb-2 ">
            <span className="font-semibold font-poppins text[#34495e]">
              Max Donation: $<span className="font-semibold">{maximumDonate}</span>
            </span>
            {/* <span className="font-semibold font-poppins">
              Donated: ${donatedAmount}
            </span> */}
          </div>
         <Link to={`/donationDetails/${_id}`}>
         <button className="w-full mt-6 bg-green-500 hover:bg-[#F69B03] text-white py-2 rounded-b-lg  transition-colors font-poppins text-xl">
            View Details
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
