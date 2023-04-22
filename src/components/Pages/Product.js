import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const productData = useLocation()
    console.log(productData)
    return (
        <>
            <div className='flex mx-4'>
                <div className='shrink-0 w-[400px] bg-[red]'>
                    <img className='w-[full] bg-green-500' src={productData.thumbnail} alt="" />
                </div>
                <div className='ml-4'>
                    <p className='text-[25px] font-bold'>{productData.title}</p>
                    <p className='my-4'>{productData.description}</p>
                    <div className='font-bold' >
                        <button className='p-3 bg-3 rounded-md mr-4 shadow-1'>
                            <p className='text-[white]'>Buy Now</p>
                        </button>
                        <button className='p-3 bg-2 rounded-md'>Add to Cart+</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;