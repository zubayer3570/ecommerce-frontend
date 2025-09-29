import React from 'react';
import { useSelector } from 'react-redux';
import MyOrdersCard from '../main-components/MyOrdersCard';
import Spinner from '../main-components/Spinner';

const MyOrders = () => {
    const { myOrders, loading } = useSelector(state => state.orders)

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div className='w-[70%] mx-auto' >
                <p className='text-[25px] font-bold text-center my-4'>Pending Orders</p>
                <div className='grid lg:grid-cols-4 mx-4 gap-4'>
                    {
                        myOrders.map(order => <MyOrdersCard key={order._id} orderDetails={order} />)
                    }
                </div>
            </div>
        </>
    );
};

export default MyOrders;