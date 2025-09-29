import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import Spinner from './Spinner';
import { fetchAllUsersThunk } from '../../features/userSlice';
import axios from 'axios';
import UserCard from './UserCard';

const AllUsers = () => {
    const { allUsers, loading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUsersThunk())
    }, [])


    return (
        <>
            <p className='text-[25px] font-bold text-center my-4'>All Users</p>
            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6 lg:mx-4 w-[95%] lg:w-[80%]'>
                    {allUsers.map(user => <UserCard userData={user} key={user._id} />)}
                </div>
            </div>
        </>
    );
};

export default AllUsers;