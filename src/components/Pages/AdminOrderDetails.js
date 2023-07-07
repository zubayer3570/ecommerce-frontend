import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchOrder, updateOrderStatus } from '../../features/orderSlice';
import Spinner from '../main-components/Spinner';

const AdminOrderDetails = () => {
    const [toggle, setToggle] = useState(true)
    const { orderID } = useParams()
    const dispatch = useDispatch()
    const { selectedOrder: orderDetails } = useSelector(state => state.orders)
    useEffect(() => { dispatch(fetchOrder(orderID)) }, [orderID])
    const updateStatus = (e) => {
        e.preventDefault()
        setToggle(!toggle)
        dispatch(updateOrderStatus({ orderID, text: e.target.orderStatus.value }))
        // dispatch(fetchOrder(orderID))
    }
    if (!orderDetails.productData) {
        return
    }
    return (
        <div className='grid grid-cols-2'>
            <img src={orderDetails?.productData.images} className='block' alt="" />
            <div className='ml-4'>
                <p className='text-[25px] font-bold'>{orderDetails.productData.title}</p>
                <p><span className='my-4 font-bold'>Description</span>{orderDetails.productData.description}</p>
                <p><span className='my-4 font-bold'>Quantity: </span>{orderDetails.quantity} piece</p>
                <p><span className='my-4 font-bold'>Total: </span>{orderDetails.totalAmount}tk</p>
                <p><span className='my-4 font-bold'>Ordering Date: </span>{orderDetails.orderDate}</p>
                <p><span className='my-4 font-bold'>Delivery Status: </span> {orderDetails.shippingStatus} </p>
                <form onSubmit={updateStatus} className={toggle ? "hidden" : "block"}>
                    <input name='orderStatus' type="text" className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring block' />
                    <input type="submit" value="Update" className='p-2 bg-3 rounded-md mr-4 text-[white] font-bold' />
                </form>
                <button onClick={() => setToggle(!toggle)} className={(toggle ? "block " : "hidden") + " p-2 bg-3 rounded-md mr-4 text-[white] font-bold"} >Update Delivery Status</button>
            </div>
        </div>
    );
};

export default AdminOrderDetails;