import React from 'react';
import { Link } from "react-router-dom"

const Login = () => {
    const loginUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        fetch("", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {

            })
    }
    return (
        <div className='flex justify-center' >
            <form onSubmit={loginUser} className='w-[80%] lg:w-[40%]'>
                <p className='text-[25px] font-bold text-center my-4'>Login to Soundex</p>
                <label className='font-bold'>Email</label>
                <input type="email" name='email' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                <label className='font-bold'>Password</label>
                <input type="password" name='password' className='mt-2 mb-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                <input type="submit" value="Login" className='cursor-pointer bg-3 hover:bg-blue-700 text-[white] font-bold py-2 px-4 rounded' />
                <p className='my-2'>
                    Don't have an account?<Link to={"/signup"} className='font-bold text-[blue]'> Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;