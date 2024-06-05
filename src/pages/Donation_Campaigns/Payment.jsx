import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./ChackOur";
const Payment = ({donate}) => {
  const stripePromise = loadStripe(`import.meta.env.VITE_Payment_Gateway_Pk`);
 
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
        <CheckOut donate={donate}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
