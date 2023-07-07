import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireUser = ({ children }) => {
    const { loggedInUser } = useSelector(state => state.user)
    const location = useLocation()
    if (!loggedInUser._id) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    else if (loggedInUser._id) {
        return children;
    }

};

export default RequireUser;