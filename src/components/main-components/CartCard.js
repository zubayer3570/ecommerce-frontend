import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../features/cartSlice';

const CartCard = (props) => {
    const navigate = useNavigate()
    const { _id, price, title, image } = props.data
    const dispatch = useDispatch()
    const takeToPayment = (e) => {
        e.stopPropagation();
        navigate("/payment/" + _id, { state: props.data })
    }
    const remove = (e) => {
        e.stopPropagation()
        dispatch(removeFromCart(props.data))
    }
    return (
        <div onClick={() => navigate("/product/" + _id, { state: props.data })} className='grid grid-cols-5 lg:grid-cols-4 rounded-md bg-[#6D94C5] font-bold lg:text-[16px] p-2 mb-3 cursor-pointer text-[white]'>
            <div className="flex items-center overflow-hidden lg:ml-8">
                <img src={image} className='h-[50px] w-[50px]' alt="" />
            </div>
            <div className='flex items-center justify-center col-span-2 lg:col-span-1'><p>{title?.substring(0, 30)}...</p></div>
            <div className='hidden lg:flex items-center justify-center'><p>{price}tk</p></div>


            <div className='flex justify-end col-span-2 lg:col-span-1'>
                <button onClick={takeToPayment} className='p-2 bg-3 rounded-md mr-4 text-[white]'>
                    {/* <p className='text-[white]'>Buy Now</p> */}
                    Buy Now
                </button>
                <button onClick={remove} className='p-2 bg-[red] rounded-md text-[white]'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartCard;