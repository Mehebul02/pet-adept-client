import { useParams } from "react-router-dom";
import Container from "../shared/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Skeleton from "../../components/skeleton/Skeleton";
import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const DonationDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: donation = {}, isLoading } = useQuery({
    queryKey: ["donation"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/donation/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Container>
      <div className=" w-[700px] mx-auto border rounded border-gray-300 p-5 m-5 ">
        <img
          src={donation.image}
          alt="Pet"
          className="w-[600px] h-[300px]  object-cover rounded mx-auto"
        />
        <div className="flex justify-between px-6 mt-3">
          <h1 className="font-semibold font-poppins text-xl  mb-2">
            {donation.name}
          </h1>
          <p className="text-gray-700 font-poppins font-medium text-base flex items-center gap-2">
            <span className="font-semibold font-poppins text[#34495e]">
              Max Donation: $
              <span className="font-semibold">{donation.maxDonation}</span>
            </span>
          </p>
        </div>

        <span className="font-semibold font-poppins">
          Donated: ${donation.donatedAmount}
        </span>

        <div className="text-center">
          <button
            className="mt-3 text-center text-xl font-poppins font-semibold px-4 py-2 bg-green-500 text-white rounded"
            //   onClick={() => openAdoptModal(pet._id, pet.name, pet.image)}
          >
            Donate Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DonationDetails;
