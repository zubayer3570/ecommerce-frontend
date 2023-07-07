import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';

const ProductCard = ({ productData }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div
            onClick={() => navigate('/product/' + productData._id)}
            className='w-full rounded-md cursor-pointer shadow-first p-3'
        >
            <div className='h-[200px] overflow-hidden rounded-md mb-2'>
                <img src={productData.image} className="w-full" alt="" />
            </div>
            <div>
                <p className='text-[16px] font-bold'>{productData.title}</p>
                <p> <span className='font-bold'>Price:</span> {productData.price}Tk</p>
            </div>
            <div className='font-bold mt-2' >
                <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/payment/" + productData?._id}
                    className='inline-block p-2 bg-3 rounded-md mr-4 shadow-first'
                >
                    <p className='text-[white]'>Buy Now</p>
                </Link>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(addToCart(productData))
                    }}
                    className='p-2 bg-2 rounded-md'
                >
                    Add to Cart+
                </button>
            </div>
        </div>
    );
};

export default ProductCard;