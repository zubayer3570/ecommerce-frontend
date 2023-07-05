import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addOrder } from "../../features/orderSlice";

export default function CheckoutForm({ orderData }) {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!elements) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      // confirmParams: {
      //   // Make sure to change this to your payment completion page
      //   return_url: "http://192.168.1.104:3000",
      // },
      redirect: "if_required"
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    if (!error) {
      toast("Payment Confirmed!")
      toast("Order has been Taken!")
      dispatch(addOrder(orderData))
    }
    navigate('/');
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="rounded-md p-4 bg-3 mt-4 font-bold text-[white]">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner">Paying</div> : "Pay now"}
        </span>
      </button>
    </form>
  );
}