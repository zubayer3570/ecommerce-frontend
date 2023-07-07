import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';
import { fetchProduct } from '../../features/productSlice';
import Spinner from '../main-components/Spinner';

const Product = () => {
    const { productID } = useParams()
    const dispatch = useDispatch()
    const { selectedProduct: productData } = useSelector(state => state.product)
    useEffect(() => { dispatch(fetchProduct(productID)) }, [])
    return (
        <>
            <div className='flex mx-4'>
                <div className='shrink-0 w-[400px] bg-[red]'>
                    <img className='w-[full] bg-green-500' src={productData.image} alt="" />
                </div>
                <div className='ml-4'>
                    <p className='text-[25px] font-bold'>{productData?.title}</p>
                    <p className='my-4'>{productData?.description}</p>
                    <div className='font-bold' >
                        <Link
                            to={"/payment/" + productID}
                            className='p-3 bg-3 rounded-md mr-4 shadow-first inline-block'
                        >
                            <p className='text-[white]'>Buy Now</p>
                        </Link>
                        <button onClick={() => dispatch(addToCart(productData))} className='p-3 bg-2 rounded-md'>Add to Cart+</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;