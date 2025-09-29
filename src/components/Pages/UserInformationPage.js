import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserThunk, fetchUserThunk, logout } from '../../features/userSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../main-components/Spinner';

const UserInformationPage = () => {
    const { userInformation, loading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userID } = useParams()

    useEffect(() => {
        dispatch(fetchUserThunk({ userID }))
    }, [userID])

    const handleDelete = () => {
        const response = window.confirm("Are you sure to delete this user?")
        if (response) {
            dispatch(deleteUserThunk({ userID: userInformation?._id }))
        }
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            <p className='text-[25px] text-center my-8 font-bold'>User Information</p>
            <div className='flex justify-center'>
                <div className='w-44 h-44 rounded-full overflow-hidden'>
                    <img src={userInformation?.proPic} className='w-full' alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div>
                    <p className='font-semibold'><span className='font-bold text-[20px]'> Name: </span>{userInformation?.name}</p>
                    <p className='font-semibold'><span className='font-bold text-[20px]'> Email: </span>{userInformation?.email}</p>
                    <p className='font-semibold'><span className='font-bold text-[20px]'> Access Level: </span>{userInformation.admin ? "Admin" : "General"}</p>
                    <button
                        onClick={handleDelete}
                        className='p-3 bg-[#ad0909] w-[46%] text-[white] rounded-md'
                    >
                        <span className='lg:block' >Delete</span>
                    </button>
                    {/* <button onClick={logoutUser} className='inline-block p-3 bg-3 rounded-md ml-4  shadow-first font-bold text-[white]'>Contact Us</button> */}
                </div>
            </div>
        </div>
    );
};

export default UserInformationPage;