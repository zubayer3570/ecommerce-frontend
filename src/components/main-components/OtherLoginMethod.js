import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../init.firebase';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { userLogin } from '../../features/userSlice';

const OtherLoginMethod = () => {
    const providerGoogle = new GoogleAuthProvider()
    const providerFacebook = new FacebookAuthProvider()
    const dispatch = useDispatch()
    const googleSignIn = async () => {
        try {
            const res = await signInWithPopup(auth, providerGoogle)
            const { displayName: name, email, photoURL: proPic, emailVerified } = res.user
            dispatch(userLogin({ name, email, proPic, emailVerified, loginMethod: "google" }))
        } catch (error) {
            console.log(error)
        }
    }
    const facebookSignIn = async () => {
        try {
            const res = await signInWithPopup(auth, providerFacebook)
            const { displayName: name, email, photoURL: proPic } = res.user
            dispatch(userLogin({ name, email, proPic, loginMethod: "facebook" }))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center'>
            <button onClick={facebookSignIn}>
                <div className='flex justify-center items-center p-2 rounded-full border-2 mb-2 lg:mb-0 lg:mr-4'>
                    <p className='font-bold mr-2'>Login with Facebook</p>
                    <div className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden'>
                        <img src="/facebook.png" className='' alt="" />
                    </div>
                </div>
            </button>
            <button onClick={googleSignIn}>
                <div className='flex justify-center items-center rounded-full border-2 p-2'>
                    <p className='font-bold mr-2' >Sign in with Google</p>
                    <div className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden'>
                        <img src="/google.png" className='' alt="" />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default OtherLoginMethod;