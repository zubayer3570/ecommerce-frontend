import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';

const NavigationBar = () => {
    const cartItem = useSelector(state => state.cart)
    const navigate = useNavigate()
    return (

        <div className='sticky top-0 z-[2]'>
            <div className='grid grid-cols-3 h-[60px] bg-3 font-bold text-[18px] rounded-md m-4'>
                <div className='hidden lg:flex text-[white] items-center pl-8'>
                    <Link to='/' >Soundex</Link>
                </div>
                <div className='flex items-center'>
                    <Search />
                </div>
                <div className='hidden lg:flex text-[white] text-[18px] items-center justify-end pr-8'>
                    <div className='relative'>
                        <div className='absolute top-[-8px] left-[35px] text-[12px] flex justify-center items-center h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                            <p>{cartItem?.length}</p>
                        </div>
                        <Link to='/cart' className='mr-8'>Cart</Link>
                    </div>
                    <button onClick={()=> navigate("/login")} className='mr-2'>Login</button>
                    <div className='mr-2 text-[15px]'>or</div>
                    <button onClick={()=> navigate("/signup")}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;