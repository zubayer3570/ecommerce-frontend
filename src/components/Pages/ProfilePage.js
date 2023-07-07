import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from '../main-components/Spinner';

const ProfilePage = () => {
    const { loggedInUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutUser = () => {
        dispatch(logout())
        navigate("/");
    }
    return (
        <div>
            <p className='text-[25px] text-center my-8 font-bold'>My Profile</p>
            <div className='flex justify-center'>
                <div className='w-44 h-44 rounded-full overflow-hidden'>
                    <img src={loggedInUser?.proPic} className='w-full' alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div>
                    <p className='font-semibold'><span className='font-bold text-[20px]'> Name: </span>{loggedInUser?.name}</p>
                    <p className='font-semibold'><span className='font-bold text-[20px]'> Email: </span>{loggedInUser?.email}</p>
                    <button onClick={logoutUser} className='inline-block p-3 bg-3 rounded-md mt-4  shadow-first font-bold text-[white]'>Logout</button>
                    {/* <button onClick={logoutUser} className='inline-block p-3 bg-3 rounded-md ml-4  shadow-first font-bold text-[white]'>Contact Us</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;