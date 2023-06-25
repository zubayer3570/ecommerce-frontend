import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderDetails = () => {
    const OrderDetails = useLocation().state
    console.log(OrderDetails)
    return (
        <div className='flex mx-4'>
            <div className='shrink-0 w-[400px] bg-[red]'>
                <img className='w-[full] bg-green-500' src={OrderDetails.productData.thumbnail} alt="" />
            </div>
            <div className='ml-4'>
                <p className='text-[25px] font-bold'>{OrderDetails.productData.title}</p>
                <p><span className='my-4 font-bold'>Quantity: </span>{OrderDetails.quantity} piece</p>
                <p><span className='my-4 font-bold'>Total: </span>{OrderDetails.totalAmount}tk</p>
                <p><span className='my-4 font-bold'>Payment Status: </span> {OrderDetails.paid ? "Paid" : "Unpaid"} </p>
                <p><span className='my-4 font-bold'>Delivery Status: </span> {OrderDetails.shippingStatus} </p>
            </div>
        </div>
    );
};

export default OrderDetails;