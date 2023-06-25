import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../main-components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../features/myOrdersSlice';

const stripePromise = loadStripe("pk_test_51L1tk9Hl8mJ3Qhh07bjmxqo4qYdRo6DXZwPtfZ2jDKLP8RZlig2atCz2gKEXHigXAujYmHnpEGwBMBAFTSkKIN3x00kTbLpqnZ")

const Checkout = () => {
    const data = useLocation().state
    console.log(data)
    const dispatch = useDispatch()
    const [clientSecret, setClientSecret] = useState(undefined)
    useEffect(() => {
        dispatch(addOrder(data))
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.client_secret))
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='w-[90%] lg:w-[60%]'>
                {
                    clientSecret && <Elements options={{ clientSecret }} stripe={stripePromise} >
                        <CheckoutForm />
                    </Elements>
                }
            </div>
        </div>
    );
};

export default Checkout;