import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectOrder } from '../../features/selectedSlice';

const AdminOrderCard = ({ orderDetails }) => {
    return (
        <>

            <div className='flex justify-around items-center rounded-md bg-2 m-4 py-2'>
                <div>{orderDetails.productData.title}</div> 
                <div>{orderDetails.email}</div>
                <Link
                    to={'/admin-order-details/' + orderDetails._id}
                    className='p-2 bg-3 rounded-md mr-4 text-[white]'
                >
                    See Details
                </Link>
            </div>
        </>
    );
};

export default AdminOrderCard;