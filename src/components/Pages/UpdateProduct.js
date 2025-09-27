// new_zub

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProduct, updateProductThunk } from '../../features/productSlice';
import Spinner from '../main-components/Spinner';

const UpdateProduct = () => {
    const { productID } = useParams()
    const dispatch = useDispatch()
    const { selectedProduct: productData, loading } = useSelector(state => state.product)
    const navigate = useNavigate()

    const [title, setTitle] = useState(productData?.title);
    const [price, setPrice] = useState(productData?.price);
    const [description, setDescription] = useState(productData?.description);

    useEffect(() => { dispatch(fetchProduct(productID)) }, [])


    useEffect(() => {
        setTitle(productData?.title)
        setPrice(productData?.price)
        setDescription(productData?.description)
    }, [productData])

    const handleUpdate = () => {
        dispatch(updateProductThunk({ id: productData._id, title, price, description }))
        navigate("/")
    }

    console.log(productData)

    if (loading) {
        return <Spinner />
    }


    return (
        <>
            <p className='text-[25px] font-bold text-center my-20'>Product Update Page</p>
            <div className='flex justify-center' >
                <div className='flex flex-col lg:flex-row mx-4 lg:w-[60%]'>
                    <div className='shrink-0 w-full lg:w-[400px]'>
                        <img className='bg-green-500' src={productData.image} alt="" />
                    </div>
                    <div className='ml-4'>
                        <label className='block font-bold' >Product Title</label>
                        <input className='border-2 p-2 rounded-md w-[600px] mb-8' value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                        <label className='block font-bold' >Price</label>
                        <input className='border-2 p-2 rounded-md w-[600px] mb-8' value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
                        <label className='block font-bold' >Product Description</label>
                        <textarea className='border-2 p-2 rounded-md w-[600px] h-[200px]' value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
                        <div className='font-bold' >
                            {/* <Link
                                to={"/payment/" + productID}
                                className='p-3 bg-3 rounded-md mr-4 shadow-first inline-block'
                            >
                                <p className='text-[white]'>Buy Now</p>
                            </Link> */}
                            <button onClick={handleUpdate} className='p-3 bg-3 rounded-md mr-4 shadow-first inline-block text-[white]'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;