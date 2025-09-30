import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../main-components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51L1tk9Hl8mJ3Qhh07bjmxqo4qYdRo6DXZwPtfZ2jDKLP8RZlig2atCz2gKEXHigXAujYmHnpEGwBMBAFTSkKIN3x00kTbLpqnZ")

const Checkout = () => {
    
    const data = useLocation().state
    const [clientSecret, setClientSecret] = useState(undefined)
    useEffect(() => {
        axios
            .post("https://ecommerce-backend-d4lh.onrender.com/create-payment-intent", data)
            .then(res => setClientSecret(res.data.client_secret))
    }, [])

    return (
        <>
        <p className='text-[25px] font-bold text-center my-6'>Pay with Cards</p>
        <div className='flex justify-center'>
            <div className='w-[90%] lg:w-[60%]'>
                {
                    clientSecret && <Elements options={{ clientSecret }} stripe={stripePromise} >
                        <CheckoutForm orderData={data} />
                    </Elements>
                }
            </div>
        </div>
        </>
    );
};

export default Checkout;