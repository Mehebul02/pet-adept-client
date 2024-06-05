
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonationCampaigns from "../../hooks/useDonationCampaigns";
import useAxiosCommon from "../../hooks/useAxiosCommon";
const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState()
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
      <button type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
    );
};

export default CheckOutForm;