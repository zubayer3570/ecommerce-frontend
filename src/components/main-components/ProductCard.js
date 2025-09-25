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
            className='w-full rounded-md cursor-pointer shadow-first bg-[white] text-[0.8em]'
        >
            <div className='h-[200px] p-8 overflow-hidden rounded-md mb-2'>
                <img src={productData.image} className="w-full" alt="" />
            </div>
            <div className='h-[100px] flex flex-col justify-center px-4'>
                <div>
                    <p className='text-[18px] pt-4 font-bold'>{productData.title.length > 40 ? productData.title.slice(0,30) + "..." : productData.title}</p>
                    <p className='text-center py-2 font-bold'> {productData.price}Tk</p>
                </div>
            </div>
            <div className='font-bold mt-2' >
                <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/payment/" + productData?._id}
                    className='inline-block p-3 bg-3 shadow-first w-[50%] text-center '
                >
                    <p className='text-[white]'>Buy Now</p>
                </Link>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(addToCart(productData))
                    }}
                    className='p-3 bg-2 w-[50%]'
                >
                    <span className='lg:hidden' >Cart+</span>
                    <span className='hidden lg:block' >Add to Cart+</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;