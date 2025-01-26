import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckOutForm.css";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const CheckoutForm = ({ setIsOpen, selectedData, refetch }) => {
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    getPaymentIntent();
  }, []);
  const getPaymentIntent = async () => {
    try {
      const res = await axiosSecure.post("create-payment-intent", {
        salary: parseInt(selectedData.employee_salary),
      });
      setClientSecret(res.data.client_secret);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(clientSecret);
  const stripe = useStripe();
  const elements = useElements();

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
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const {paymentIntent} =await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: selectedData?.employee_name,
          email: selectedData?.employee_email,
        },
      },
    });
    console.log(paymentIntent);
    if(paymentIntent.status==='succeeded'){
        console.log("success")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button onClick={handleSubmit}
        type="submit"
        disabled={!stripe}
        className="btn btn-error text-white w-full"
      >
        {` Pay  ${selectedData.employee_salary}৳`}
      </button>
    </form>
  );
};
export default CheckoutForm;
