import { Helmet } from "react-helmet-async";
import Container from "../shared/Container";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDateRange } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../../components/skeleton/Skeleton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PetDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [petDetails, setPetDetails] = useState({});
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  //  tan stack query single data
  const { id } = useParams();
  const { data: pet = {}, isLoading } = useQuery({
    queryKey: ["pet", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/pet/${id}`);
      return data;
    },
  });

  const openAdoptModal = () => {
    // const petDetails = {
    //   petId,
    //   petName,
    //   petImage,
    //   phoneNumber,
    //   address,
    //   userName: user?.displayName,
    //   email: user?.email,
    //   date: new Date(),
    // };

    setPetDetails();
    setIsModalOpen(true);
  };

  const closeAdoptModal = () => {
    setIsModalOpen(false);
  };
  // handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const petId = form.petId.value;
    const petName = form.petName.value;
    const petImage = form.petImage.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const location = form.address.value;
    const phone = form.phoneNumber.value;
    const status='request'
    const adoptDetails = {
      petId,
      petName,
      petImage,
      userName,
      email,
      location,
      phone,
      status
    };

    try {
      const { data } = await axiosSecure.post("/adopts", adoptDetails);
      if (data.insertedId) {
        toast.success("Adopt submit successfully");
        navigate("/petListing");
      }
      // console.log(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }

    setIsModalOpen(false);
  };
  return (
    <Container>
      <div className="p-32">
        <Helmet>
          <title>Paws Nets-PetDetails</title>
        </Helmet>

        <div className="w-[700px] mx-auto ">
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className=" border rounded border-gray-300 p-5 m-5 ">
              <img
                src={pet.image}
                alt="Pet"
                className="w-[600px] h-[300px]  object-cover rounded mx-auto"
              />
              <div className="flex justify-between px-6 mt-3">
                <div className="font-semibold font-poppins text-xl  mb-2">
                  {pet.name}
                </div>
                <p className="text-gray-700 font-poppins font-medium text-base flex items-center gap-2">
                  {" "}
                  <span>
                    <MdDateRange />
                  </span>
                  {pet.age}
                </p>
              </div>

              <p className="px-6 flex items-center gap-3 font-medium text-gray-700  font-poppins">
                <span className="text-red-700">
                  <CiLocationOn />{" "}
                </span>
                {pet.location}
              </p>

              <div className="text-center">
                <button
                  className="mt-3 text-center text-xl font-poppins font-semibold px-4 py-2 bg-green-500 text-white rounded"
                  onClick={() => openAdoptModal(pet._id, pet.name, pet.image)}
                >
                  Adopt
                </button>
              </div>
            </div>
          )}

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded shadow-lg relative w-full max-w-lg">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={closeAdoptModal}
                >
                  <VscChromeClose className="text-3xl text-black" />{" "}
                </button>
                <h2 className="text-2xl font-poppins mb-4">{pet.name}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="petId" value={pet._id} />
                  <input type="hidden" name="petName" value={pet.name} />
                  <input type="hidden" name="petImage" value={pet.image} />
                  <div>
                    <label htmlFor="userName" className="block text-gray-700">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      value={user?.displayName}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xl  text-gray-700"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user?.email}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-700"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-gray-700">
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-xl font-poppins bg-[#F69B03] text-white p-2 rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PetDetails;
