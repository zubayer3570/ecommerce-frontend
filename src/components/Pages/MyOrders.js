import React from 'react';
import { useSelector } from 'react-redux';
import MyOrdersCard from '../main-components/MyOrdersCard';

const MyOrders = () => {
    const myOrders = useSelector(state => state.myOrders)
    return (
        <div className='grid grid-cols-4 mx-4 gap-2'>
            {
                myOrders.map(order => <MyOrdersCard key={order.id} orderDetails={order} />)
            }
        </div>
    );
};

export default MyOrders;