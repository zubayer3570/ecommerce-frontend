import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { cancelOrder } from '../../features/orderSlice';

const MyOrdersCard = ({ orderDetails }) => {
    const dispatch = useDispatch()
    return (
        <div className='shadow-first p-2 rounded-md overflow-hidden'>
            <div className='h-[200px] overflow-hidden'>
                <img src={orderDetails.productData.image} className='w-full rounded-md' alt="" />
            </div>
            <p className='font-bold'>{orderDetails.productData.title}</p>
            <p> <span className='font-bold'>Quantity:</span> {orderDetails.quantity} piece</p>
            <p><span className='font-bold'>Amount:</span> {orderDetails.totalAmount}tk</p>
            <div className='grid grid-cols-2 gap-2'>
                <Link to={"/order-details/" + orderDetails._id} className='block text-center font-bold text-white text-[white] rounded-md bg-3 py-1'>See details</Link>
                <button onClick={() => dispatch(cancelOrder(orderDetails))} className='block text-center font-bold text-white text-[white] rounded-md bg-[red] py-1' >Cancel</button>
            </div>
        </div>
    );
};

export default MyOrdersCard;