import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../features/adminSlice';
import AdminOrderCard from '../main-components/AdminOrderCard';

const ManageAllOders = () => {
    const { allOrders } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(fetchAllOrders()) }, [])
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