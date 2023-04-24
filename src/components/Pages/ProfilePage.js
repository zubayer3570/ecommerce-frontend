import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/loginSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutUser = () => {
        dispatch(logout())
        navigate("/");
    }
    return (
        <div>
            <button onClick={logoutUser}>Logout</button>
            this is profile page
        </div>
    );
};

export default ProfilePage;