import React from 'react';
import { Link } from 'react-router-dom'

const AdminOrderCard = ({ orderDetails }) => {
    return (
        <>
            <div className='grid grid-cols-3 rounded-md bg-2 m-4 py-4 shadow-md w-[70%] mx-auto'>
                <p className='text-center'>{orderDetails?.productData?.title}</p>
                <p className='text-center'>{orderDetails?.email}</p>
                <div className='text-center'>
                    <Link
                        to={'/admin-order-details/' + orderDetails._id}
                        className='p-2 bg-3 rounded-md mr-4 text-[white]'
                    >
                        See Details
                    </Link>
                </div>
            </div>

        </>
    );
};

export default AdminOrderCard;