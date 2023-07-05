import React from 'react';

const Spinner = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <img src="/spinner.svg" className='h-[50px] w-[50px] animate-spin' alt="" />
        </div>
    );
};

export default Spinner;