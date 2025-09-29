import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../main-components/CartCard';
import Footer from '../main-components/Footer';
import { updateFooter } from '../../features/footerSlice';
import QueryCard from '../main-components/QueryCard';
import { fetchAllUserQueriesThunk } from '../../features/userSlice';

const AllUserQueries = () => {
    const dispatch = useDispatch()
    const { allUserQueries } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchAllUserQueriesThunk())
    }, [])

    return (
        <>
            <p className='text-[25px] font-bold text-center my-4'>All User Queries</p>
            <div className='flex justify-center' >
                <div className='mx-4 lg:w-[70%]' id='height'>
                    {
                        allUserQueries?.map(query => <QueryCard key={query._id} data={query} />)
                    }
                </div>
            </div>
        </>
    );
};

export default AllUserQueries;