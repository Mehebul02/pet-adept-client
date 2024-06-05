
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonationCampaigns from "../../hooks/useDonationCampaigns";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAuth from "../../hooks/useAuth";

const CheckOutForm = ({setShowModal}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState()
    const {user} = useAuth()
    const axiosCommon =useAxiosCommon()
    const [clientSecret, setClientSecret] = useState()
    const axiosSecure =useAxiosSecure()
    const [donation,isLoading]=useDonationCampaigns()
    const totalDonate = donation.maximumDonate
    console.log(totalDonate);
useEffect(()=>{
  axiosSecure.post(`/create-payment-intent`,{maximumDonate:totalDonate})
  .then(res =>{
    console.log(res.data.clientSecret);
    setClientSecret(res.data.clientSecret)
  })
},[axiosSecure,totalDonate])
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message)
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    // confirm payment 
    const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email:user?.email || 'anonymous',
          name:user?.displayName || 'anonymous'
        }
      }
    })
    if(confirmError){
      console.log('confirm Error',confirmError.message);
    }
    else{
      console.log('payment intent',paymentIntent);
    }
     
  };
    return (
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {/* <button type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button> */}
      <div className="bg-gray-50 mt-10 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button  type="submit" disabled={!stripe || !clientSecret}
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
              </div>
      <p className="text-red-600">{error}</p>
    </form>
    );
};

export default CheckOutForm;