// new_zub

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';
import { deleteUserThunk, makeAdminThunk } from '../../features/userSlice';
import { toast } from 'react-toastify';

const UserCard = ({ userData }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = () => {
        const response = window.confirm("Are you sure to delete this user?")
        if (response) {
            dispatch(deleteUserThunk({ userID: userData?._id }))
        }
    }

    const handleMakeAdmin = () => {
        if (userData?.admin) {
            toast("This user is already an Admin")
            return
        }
        const response = window.confirm("Are you sure to make this user an Admin?")
        if (response) {
            dispatch(makeAdminThunk({ userID: userData?._id }))
        }
    }

    return (
        <div
            className='w-full rounded-md cursor-pointer shadow-first bg-[white] text-[0.8em]'
        >
            <div className='h-[200px] p-8 overflow-hidden rounded-md mb-2'>
                <img
                    // onClick={() => navigate('/user-information/' + userData?._id)}
                    src={userData?.proPic} className="w-full" alt="" />
            </div>
            <div className='h-[100px] flex flex-col justify-center px-4'>
                <div>
                    <p className='text-[18px] pt-4 font-bold text-center'>{userData?.name} <span className='text-[red]' >{userData.admin && "(Admin)"}</span> </p>
                </div>
            </div>
            <div className='font-bold mt-2 m-3 flex justify-center' >
                <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/user-information/" + userData?._id}
                    className='inline-block p-3 bg-[#138507] shadow-first w-[30%] text-center mr-2 rounded-md'
                >
                    <p className='text-[white]'>See Details</p>
                </Link>
                <button
                    onClick={handleMakeAdmin}
                    className='p-3 bg-[orange] w-[30%] text-[white] rounded-md mr-2'
                >
                    <span className='lg:block' >Make Admin</span>
                </button>
                <button
                    onClick={handleDelete}
                    className='p-3 bg-[#ad0909] w-[30%] text-[white] rounded-md'
                >
                    <span className='lg:block' >Delete</span>
                </button>
            </div>
        </div>
    );
};

export default UserCard;