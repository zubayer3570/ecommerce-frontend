import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../../features/productSlice';
import Spinner from '../main-components/Spinner';

const Payment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const quantityInput = useRef()
    const { productID } = useParams()
    const [quantity, setQuantity] = useState(1)
    const { loggedInUser } = useSelector(state => state.user)
    const { selectedProduct: productData, loading } = useSelector(state => state.product)
    const [grandTotal, setGrandTotal] = useState(productData?.price)

    useEffect(() => {
        dispatch(fetchProduct(productID))
    }, [])

    if (loading) {
        return <Spinner />
    }

    const updateQuantity = (action) => {
        const inputValue = parseInt(quantityInput.current.value)
        if (action === "increment") quantityInput.current.value = inputValue + 1
        if (action === "decrement") quantityInput.current.value = inputValue - 1
        setQuantity(parseInt(quantityInput.current.value))
        setGrandTotal(parseInt(quantityInput.current.value) * productData.price)
    }

    const goToCheckout = () => {
        navigate("/checkout", { state: { email: loggedInUser.email, productData, quantity } })
    }

    if (!productData) {
        return;
    }

    return (
        <div className='flex flex-col lg:flex-row mx-4'>
            <div className='shrink-0 w-full lg:w-[400px]'>
                <img className='w-full' src={productData.image} alt="" />
            </div>
            <div className='ml-4'>
                <p className='text-[25px] font-bold'>{productData.title}</p>
                <p className='my-4'>{productData.description}</p>
                <p className='my-4 font-bold'>Unit Price: ${productData.price}</p>
                <div className='flex my-2'>
                    <p className='font-bold mr-4'>Quantity:</p>
                    <div className='flex'>
                        <button
                            disabled={grandTotal === productData.price ? true : false}
                            onClick={() => updateQuantity("decrement")}
                            className='w-[30px] h-[30px] bg-3 rounded-l-2xl font-bold flex items-center justify-center text-[white] text-[20px]'
                        >
                            <p>-</p>
                        </button>
                        <div>
                            <input
                                ref={quantityInput}
                                onChange={() => setGrandTotal(parseInt(quantityInput.current.value) * productData.price)}
                                type="text"
                                defaultValue='1'
                                className='w-[40px] h-[30px] border-0 outline-0 text-center'
                            />
                        </div>
                        <button onClick={() => updateQuantity("increment")} className='w-[30px] h-[30px] bg-3 rounded-r-2xl font-bold flex items-center justify-center text-[white] text-[20px]'><p>+</p></button>
                    </div>
                </div>
                <p className='font-bold text-[20px] mb-2'>Grand Total: ${grandTotal}</p>
                <div className='font-bold' >
                    <button className='p-3 bg-3 rounded-md mr-4 shadow-first'>
                        <p onClick={goToCheckout} className='text-[white]'>Checkout</p>
                    </button>
                    <button className='p-3 bg-3 rounded-md mr-4 shadow-first'>
                        <p onClick={() => navigate('/')} className='text-[white]'>Continue shopping</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;