import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/loginSlice';

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const test = (e) => {
        e.preventDefault()
        document.getElementById('getFile')?.click()
    }
    const fileNameUpdate = (e) => {
        if (e.target.files[0].type.includes("image")) {
            document.getElementById('error').innerText = ""
            document.getElementById('placeholderButton').innerHTML = e.target.files[0].name
        } else {
            document.getElementById('error').innerText = `Error: Only Images are allowed!!!`
            document.getElementById('error').style.color = "red"
            document.getElementById('placeholderButton').innerText = "Upload again!!!"
        }
    }
    const signUpUser = (e) => {
        e.preventDefault()
        const profilePic = e.target.profilePic.files[0]
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("profilePic", profilePic)
        formData.append("password", password)
        fetch("http://localhost:5000/signup", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // updateUserState
                dispatch(loginUser(data))
                navigate("/")
            })
    }
    return (
        <div className='flex justify-center' encType="multipart/form-data" >
            <form onSubmit={signUpUser} className='w-[80%] lg:w-[40%]'>
                <label className='font-bold'>Name</label>
                <input type="text" name='name' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                <div className='my-2'>
                    <label className='font-bold'>Upload your Profile Picture</label>
                    <input type="file" id='getFile' name='profilePic' onChange={fileNameUpdate} className='hidden' />
                    <button onClick={test} id="placeholderButton" className='bg-3 px-2 py-1 rounded-md font-bold text-[white] ml-2'>Upload</button>
                    <div id='error' className='text-red'></div>
                </div>
                <label className='font-bold'>Email</label>
                <input type="text" name='email' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                <label className='font-bold'>Password</label>
                <input type="password" name='password' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                <input type="submit" value='Sign Up' className='cursor-pointer bg-3 hover:bg-blue-700 text-[white] font-bold py-2 px-4 rounded' />
                <p className='my-2'>
                    Already have an account?<Link to={"/login"} className='font-bold text-[blue]'> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;