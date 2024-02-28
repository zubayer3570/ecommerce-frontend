import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOrder } from '../../features/orderSlice';
import Spinner from '../main-components/Spinner';


const OrderDetails = () => {
    const { selectedOrder: orderDetails, loading } = useSelector(state => state.orders)
    const dispatch = useDispatch()
    const { orderID } = useParams()

    useEffect(() => { dispatch(fetchOrder(orderID)) }, [])
    
    if (loading) {
        return <Spinner />
    }
    if (!orderDetails.productData) {
        return;
    }
    return (
        <>
            <p className='text-[25px] font-bold text-center my-6'>Your Order Details</p>
            <div className='flex mx-4'>
                <div className='shrink-0 w-[400px] bg-[red]'>
                    <img className='w-[full] bg-green-500' src={orderDetails.productData?.image} alt="" />
                </div>
                <div className='ml-4'>
                    <p className='text-[25px] font-bold'>{orderDetails.productData?.title}</p>
                    <p><span className='my-4 font-bold'>Description</span>{orderDetails.productData?.description}</p>
                    <p><span className='my-4 font-bold'>Quantity: </span>{orderDetails.quantity} piece</p>
                    <p><span className='my-4 font-bold'>Total: </span>{orderDetails.totalAmount}tk</p>
                    <p><span className='my-4 font-bold'>Ordering Date: </span>{orderDetails.orderDate}</p>
                    <p><span className='my-4 font-bold'>Delivery Status: </span> {orderDetails.shippingStatus} </p>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;