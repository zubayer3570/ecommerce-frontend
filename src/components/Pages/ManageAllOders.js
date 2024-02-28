import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminOrderCard from '../main-components/AdminOrderCard';
import Spinner from '../main-components/Spinner';

const ManageAllOders = () => {
    const { allOrders, loading } = useSelector(state => state.orders)

    if (loading) {
        return <Spinner />
    }
    
    return (
        <>
            <p className='text-[25px] font-bold text-center my-4'>All Orders</p>
            <div className='grid grid-cols-3 font-bold'>
                <p className='text-center'>Product</p>
                <p className='text-center'>Email</p>
            </div>
            <div className='font-bold'>
                {
                    allOrders?.map(order => <AdminOrderCard orderDetails={order} />)
                }
            </div>
        </>
    );
};

export default ManageAllOders;