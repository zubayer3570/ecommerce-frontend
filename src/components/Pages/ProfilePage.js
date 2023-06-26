import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userLogin } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const userCredentials = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutUser = () => {
        dispatch(logout())
        navigate("/");
    }
    return (
        <div>
            <div className='flex justify-center'>
            <img src={userCredentials?.proPic} className='w-44 rounded-full' alt="" />
            </div>
            <p>Name: <span>{userCredentials?.name}</span></p>
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
};

export default ProfilePage;