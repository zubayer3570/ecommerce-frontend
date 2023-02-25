import React from 'react';
import Search from './Search';

const NavigationBar = () => {
    return (
        <div className='flex my-2'>
            <div className='hidden lg:block'>
                Soundex
            </div>
            <div className='flex-grow'>
                <Search />
            </div>
            <div className='hidden lg:block'>
                Soundex
            </div>
        </div>
    );
};

export default NavigationBar;