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

    useEffect(() => {
        setGrandTotal(productData?.price)
    }, [productData])

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
        // <div className='flex flex-col lg:flex-row mx-4'>
        //     <div className='shrink-0 w-full lg:w-[400px]'>
        //         <img className='w-full' src={productData.image} alt="" />
        //     </div>
        //     <div className='ml-4'>
        //         <p className='text-[25px] font-bold'>{productData.title}</p>
        //         <p className='my-4'>{productData.description}</p>
        //         <p className='my-4 font-bold'>Unit Price: ${productData.price}</p>
        //         <div className='flex my-2'>
        //             <p className='font-bold mr-4'>Quantity:</p>
        //             <div className='flex'>
        //                 <button
        //                     disabled={grandTotal === productData.price ? true : false}
        //                     onClick={() => updateQuantity("decrement")}
        //                     className='w-[30px] h-[30px] bg-3 rounded-l-2xl font-bold flex items-center justify-center text-[white] text-[20px]'
        //                 >
        //                     <p>-</p>
        //                 </button>
        //                 <div>
        //                     <input
        //                         ref={quantityInput}
        //                         onChange={() => setGrandTotal(parseInt(quantityInput.current.value) * productData.price)}
        //                         type="text"
        //                         defaultValue='1'
        //                         className='w-[40px] h-[30px] border-0 outline-0 text-center'
        //                     />
        //                 </div>
        //                 <button onClick={() => updateQuantity("increment")} className='w-[30px] h-[30px] bg-3 rounded-r-2xl font-bold flex items-center justify-center text-[white] text-[20px]'><p>+</p></button>
        //             </div>
        //         </div>
        //         <p className='font-bold text-[20px] mb-2'>Grand Total: ${grandTotal}</p>
        //         <div className='font-bold' >
        //             <button className='p-3 bg-3 rounded-md mr-4 shadow-first'>
        //                 <p onClick={goToCheckout} className='text-[white]'>Checkout</p>
        //             </button>
        //             <button className='p-3 bg-3 rounded-md mr-4 shadow-first'>
        //                 <p onClick={() => navigate('/')} className='text-[white]'>Continue shopping</p>
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className='flex justify-center lg:py-[100px]' >
            <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden mx-4 p-6 transition-all duration-300 hover:shadow-2xl lg:w-[70%]">
                {/* Product Image */}
                <div className="shrink-0 w-full lg:w-[400px] flex items-center justify-center bg-gray-50 rounded-xl">
                    <img
                        className="w-full h-auto object-contain rounded-lg"
                        src={productData.image}
                        alt={productData.title}
                    />
                </div>

                {/* Product Details */}
                <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col justify-between">
                    {/* Title & Description */}
                    <div>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-800">
                            {productData.title}
                        </p>
                        <p className="my-4 text-gray-600 leading-relaxed">
                            {productData.description}
                        </p>
                        <p className="my-4 font-semibold text-lg text-gray-700">
                            Unit Price:{" "}
                            <span className="text-emerald-600 font-bold">{productData.price} Taka</span>
                        </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mt-4">
                        <p className="font-bold text-gray-800 mb-2">Quantity:</p>
                        <div className="flex items-center">
                            <button
                                disabled={grandTotal === productData.price}
                                onClick={() => updateQuantity("decrement")}
                                className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 rounded-l-xl font-bold flex items-center justify-center text-white text-xl transition"
                            >
                                −
                            </button>
                            <input
                                ref={quantityInput}
                                onChange={() =>
                                    setGrandTotal(
                                        parseInt(quantityInput.current.value) * productData.price
                                    )
                                }
                                type="text"
                                defaultValue="1"
                                className="w-12 h-10 border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-center text-gray-800"
                            />
                            <button
                                onClick={() => updateQuantity("increment")}
                                className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-r-xl font-bold flex items-center justify-center text-white text-xl transition"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Grand Total */}
                    <p className="font-bold text-xl text-gray-800 mt-6">
                        Grand Total:{" "}
                        <span className="text-emerald-600">{grandTotal} Taka</span>
                    </p>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-4">
                        <button
                            onClick={goToCheckout}
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md text-white font-semibold transition bg-3 text-[white]"
                        >
                            Checkout
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl shadow-sm text-gray-800 font-semibold transition bg-2"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;