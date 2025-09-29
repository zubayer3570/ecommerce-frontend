import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../features/cartSlice';
import { deleteQueryThunk } from '../../features/userSlice';

const QueryCard = (props) => {
    const navigate = useNavigate()
    const { _id, name, email, message } = props.data
    const dispatch = useDispatch()

    const remove = (e) => {
        e.stopPropagation()
        dispatch(deleteQueryThunk({ queryID: _id }))
    }
    return (
        <div className='grid grid-cols-5 lg:grid-cols-4 rounded-md bg-[#6D94C5] font-bold lg:text-[16px] p-2 mb-3 cursor-pointer text-[white]'>
            <div className="flex items-center overflow-hidden lg:ml-8">
                <p>{name}</p>
            </div>
            <div className='hidden lg:flex items-center justify-center'><p>{email}</p></div>
            <div className='flex items-center justify-center col-span-2 lg:col-span-1'><p>{message?.substring(0, 30)}...</p></div>


            <div className='flex justify-end col-span-2 lg:col-span-1'>
                <Link to={"/reply-to-query/" + _id} className='p-2 bg-3 rounded-md mr-4 text-[white]'>
                    {/* <p className='text-[white]'>Buy Now</p> */}
                    Reply
                </Link>
                <button onClick={remove} className='p-2 bg-[red] rounded-md text-[white]'>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default QueryCard;