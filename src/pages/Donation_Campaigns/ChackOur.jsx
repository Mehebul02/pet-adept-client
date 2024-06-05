import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useDonationCampaigns from "../../hooks/useDonationCampaigns";
import useAuth from "../../hooks/useAuth";


const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  // const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate()
 const [donation]=useDonationCampaigns()
 console.log(donation.donatedAmount);
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //   payment gatewar
  // useEffect(() => {
  //   if(totalPrice >0){
  //       axiosSecure
  //     .post(`/create-payment-intent`, { price: totalPrice })
  //     .then((res) => {
  //       console.log(res.data.clientSecret);
  //       setClientSecret(res.data.clientSecret);
  //     });
  //   }
  // }, [axiosSecure, totalPrice]);
  //   payment gateway submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    // paymentIntent
    // const { paymentIntent, error: confirmError } =
    //  await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         email: user?.email || "anonymous",
    //         name: user?.displayName || "anonymous",
    //       },
    //     },
    //   });
    // if (confirmError) {
    //   console.log("confirm error");
    // } else {
    //   console.log("Payment intent", paymentIntent);
    //   if (paymentIntent.status === "succeeded") {
      
    //     setTransactionId(paymentIntent.id);
    //     // now payment the in the database
    //     const payment = {
    //       email: user?.email,
    //       price: totalPrice,
    
    //       transactionId: paymentIntent.id,
    //       date: new Date(),
          
    //       status: "pending",
    //     };
    //     const res = await axiosSecure.post('/payments',payment)
    //     // console.log(res.data);
    //     refetch()
    //     if(res.data?.paymentResult?.insertedId){
    //         toast.success("Payment successfully");
    //         navigate('/dashboard/paymentHistory')
    //     }

    //   }
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
    
         <input
                //   {...register("age")}
                defaultValue={donation.donatedAmount}
                  name="amount"
                  type="number"
                  placeholder="Pet Age"
                  
                  className="input input-bordered valid:border-[#005A55] w-full "
                />
              
      <h1 className=" font-poppins my-5">Card Details</h1>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    
      <button
        className="w-full my-6 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm cursor-pointer"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Donate
      </button>
      <p className="text-xl text-red-600">{error}</p>
      <p className="text-xl text-green-700">{transactionId}</p>
    </form>
  );
};

export default CheckOut;