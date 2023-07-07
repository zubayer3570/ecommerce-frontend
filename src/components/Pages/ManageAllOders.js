import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminOrderCard from '../main-components/AdminOrderCard';
import Spinner from '../main-components/Spinner';

const ManageAllOders = () => {
    const { allOrders } = useSelector(state => state.orders)
    return (
        <>
            <div className='grid grid-cols-3 font-bold'>
                <p className='text-center'>Product</p>
                <p className='text-center'>Email</p>
            </div>
            {
                allOrders?.map(order => <AdminOrderCard orderDetails={order} />)
            }
        </>
    );
};

export default ManageAllOders;