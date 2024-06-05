
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const CheckOutForm = ({donation}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState()
    const axiosSecure =useAxiosSecure()
    useEffect(() => {
        // fetch client secret
        if (donation?.donatedAmount && donation?.donatedAmount > 1) {
          getClientSecret({ donatedAmount: donation?.donatedAmount })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [donation?.donatedAmount])
    
      //   get clientSecret
      const getClientSecret = async donatedAmount => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, donatedAmount)
        console.log('clientSecret from server--->', data)
        setClientSecret(data.clientSecret)
      }
      console.log(clientSecret);
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
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
        <button className="bg-green-800 text-white px-4 py-1 rounded-lg mt-3" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheckOutForm;