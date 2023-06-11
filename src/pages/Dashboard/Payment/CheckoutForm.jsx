import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
const CheckoutForm = () => {
    const stripe = useStripe();
    const element = useElements();
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !element) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      // https://github.com/stripe/react-stripe-js/blob/master/examples/class-components/0-Card-Minimal.js
        const card = element.getElement(CardElement);
        if (card === null) {
            return;
        }
    }
  return (
    <form className="w-2/3 mx-8" onSubmit={handleSubmit}>
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
      <button className="btn btn-primary mt-4 btn-sm" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
