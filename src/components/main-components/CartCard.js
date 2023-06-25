import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../features/cartSlice';

const CartCard = (props) => {
    const navigate = useNavigate()
    const { id, price, title, thumbnail } = props.data
    const dispatch = useDispatch()
    const takeToPayment = (e) => {
        e.stopPropagation();
        navigate("/payment/" + id, { state: props.data })
    }
    const remove = (e) => {
        e.stopPropagation()
        dispatch(removeFromCart(props.data))
    }
    return (
        <div onClick={() => navigate("/product/" + id, {state: props.data})} className='grid grid-cols-4 rounded-md bg-2 font-bold text-[18px] py-2 mb-3 cursor-pointer'>
            <div className="flex items-center h-[50px] w-[50px] rounded-full overflow-hidden ml-12">
                <img src={thumbnail} alt="" />
            </div>
            <div className='flex items-center justify-center'><p>{title.substring(0, 30)}...</p></div>
            <div className='flex items-center justify-center'><p>{price}</p></div>


            <div className='flex justify-end'>
                <button onClick={takeToPayment} className='p-2 bg-3 rounded-md mr-4 text-[white]'>
                    {/* <p className='text-[white]'>Buy Now</p> */}
                    Buy Now
                </button>
                <button onClick={remove} className='p-2 bg-3 rounded-md mr-4 text-[white]'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartCard;