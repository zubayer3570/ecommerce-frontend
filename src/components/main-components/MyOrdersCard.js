import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersCard = ({ orderDetails }) => {
    return (
        <div>
            <div className='h-[200px] overflow-hidden'>
                <img src={orderDetails.productData.images[0]} className='w-full' alt="" />
            </div>
            <p className='font-bold'>{orderDetails.productData.title}</p>
            <p> <span className='font-bold'>Quantity:</span> {orderDetails.quantity} piece</p>
            <p><span className='font-bold'>Amount:</span> {orderDetails.totalAmount}tk</p>
            <Link to="/order-details" state={orderDetails} className='block text-center font-bold text-white text-[white] rounded-md bg-3 py-1'>See details</Link>
        </div>
    );
};

export default MyOrdersCard;