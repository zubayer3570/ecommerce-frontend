import React from 'react';
import { useSelector } from 'react-redux';
import MyOrdersCard from '../main-components/MyOrdersCard';

const MyOrders = () => {
    const {myOrders} = useSelector(state => state.orders)
    return (
        <div className='grid lg:grid-cols-4 mx-4 gap-2'>
            {
                myOrders.map(order => <MyOrdersCard key={order._id} orderDetails={order} />)
            }
        </div>
    );
};

export default MyOrders;