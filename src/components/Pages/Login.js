import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from '../../features/userSlice';
import { auth } from '../../init.firebase';
import OtherLoginMethod from '../main-components/OtherLoginMethod';
import Spinner from '../main-components/Spinner';



const Login = () => {
    const { loggedInUser } = useSelector(state => state.user);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginUserHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch(userLogin({ email, password }));
    }
    useEffect(() => { loggedInUser?._id && navigate("/") }, [loggedInUser])
    return (
        <div className='flex flex-col items-center' >
            <form onSubmit={loginUserHandler} className='w-[80%] lg:w-[40%]'>
                <p className='text-[25px] font-bold text-center my-4'>Login to Soundex</p>

                {/* form value */}
                <label className='font-bold'>Email</label>
                <input type="email" name='email' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                <label className='font-bold'>Password</label>
                <input type="password" name='password' className='mt-2 mb-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />

                {/* error message */}
                <div style={{ color: "red" }}>{loggedInUser?._id ? "" : loggedInUser?.message}</div>

                {/* submit button */}
                <input type="submit" value="Login" className='cursor-pointer bg-3 hover:bg-blue-700 text-[white] font-bold py-2 px-4 rounded' />

                <p className='my-2'>
                    Don't have an account?<Link to={"/signup"} className='font-bold text-[blue]'> Sign Up</Link>
                </p>
            </form>
            {/* <button onClick={googleSignIn}>Goolge</button>
            <button onClick={facebookSignIn}>Facebook</button> */}
            <OtherLoginMethod />
        </div>
    );
};

export default Login;