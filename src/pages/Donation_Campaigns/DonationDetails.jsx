
import Container from "../shared/Container";
import Skeleton from "../../components/skeleton/Skeleton";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useDonationCampaigns from "../../hooks/useDonationCampaigns";
import CheckOutForm from "./CheckOutForm";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const DonationDetails = () => {
  const [showModal, setShowModal] = useState(false);
const [donation,isLoading]=useDonationCampaigns()
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
              <span className="font-semibold">{donation.maximumDonate}</span>
            </span>
          </p>
        </div>

        {/* <span className="font-semibold font-poppins">
          Donated: ${donation.donatedAmount}
        </span> */}

        <div className="text-center">
          <button onClick={() => setShowModal(true)}
            className="mt-3 text-center text-xl font-poppins font-semibold px-4 py-2 bg-green-500 text-white rounded"
            //   onClick={() => openAdoptModal(pet._id, pet.name, pet.image)}
          >
            Donate Now
          </button>
        </div>
 

      {/* Donation Modal */}
      <div className={`fixed inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        
          </span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                <h1 className="block text-gray-700 text-sm font-bold m-2"> Pet name: {donation?.name}</h1>
                  <label htmlFor="donationAmount" className="block text-gray-700 text-sm font-bold m-2">
                  Max  Donation Amount:{donation?.maximumDonate} <br />
                   
                  </label>
                  
                  {/* Elements  */}
                  <div className="my-10">
                    <h1 className="my-5 font-poppins font-semibold">Your Card Number</h1>
                  <Elements stripe={stripePromise} >
        <CheckOutForm setShowModal={setShowModal} />
        </Elements>
                  </div>
                </div>
                <div >
                  {/* <label htmlFor="cardElement" className="block text-gray-700 text-sm font-bold mb-2">
                    Card Details
                  </label> */}
                  {/* <Elements stripe={stripePromise}>
                    {/* Include Stripe credit card element here */}
                  {/* </Elements> */} 
                </div>
              </div>
              {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  // type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Donate
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div> */}
            
          </div>
        </div>
      </div>

      {/* Donation Campaigns */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Donation Campaigns</h2>
        {/* <ul>
          {donation.map((donation) => (
            <li key={donation.id} className="mb-2">
              <p>{donation.donor} donated ${donation.amount}</p>
            </li>
          ))}
        </ul> */}
      </div>

      {/* Recommended Donation Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recommended Donation Campaigns</h2>
        <div>
          {/* Display recommended donation campaigns here */}
        </div>
      </div>
    </div>
      
    </Container>
  );
};

export default DonationDetails;
