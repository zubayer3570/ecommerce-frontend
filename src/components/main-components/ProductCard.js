import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';

const ProductCard = ({ productData }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div onClick={() => navigate('/product/' + productData.id, { state: productData })} className='w-[300px] rounded-md cursor-pointer'>
            <div className='h-[200px] overflow-hidden rounded-md m-2'>
                <img src={productData.thumbnail} className="w-full" alt="" />
            </div>
            <div>
                <p className='text-[20px] font-bold'>{productData.title}</p>
                <p>{productData.price}</p>
            </div>
            <div className='font-bold' >
                <Link
                    onClick={(e) => e.stopPropagation()}
                    to={`/payment/${productData.id}`}
                    state={productData}
                    className='inline-block p-3 bg-3 rounded-md mr-4 shadow-first'
                >
                    <p className='text-[white]'>Buy Now</p>
                </Link>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(addToCart(productData))
                    }}
                    className='p-3 bg-2 rounded-md'
                >
                    Add to Cart+</button>
            </div>
        </div>
    );
};

export default ProductCard;