import React from 'react';
import Search from './Search';

const NavigationBar = () => {
    return (
        <div className='grid grid-cols-3 h-[60px] bg-3 font-bold text-[18px] rounded-md m-4'>
            <div className='hidden lg:flex text-[white] items-center pl-8'>
                <p>Soundex</p>
            </div>
            <div className='flex items-center'>
                <Search />
            </div>
            <div className='hidden lg:flex text-[white] text-[18px] items-center justify-end pr-8'>
                <div className='mr-8'>Cart</div>
                <div className='mr-2'>Login</div>
                <div className='mr-2 text-[15px]'>or</div>
                <div>Sign Up</div>
            </div>
        </div>
    );
};

export default NavigationBar;