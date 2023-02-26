import React from 'react';

const TopProducts = () => {
    return (
        <div className='m-4'>
            <div className='flex items-center justify-center h-[40px] w-[150px] bg-3 rounded-t-md'> 
                <p className='font-bold text-[white]'>Top Products</p>
            </div> 
            <div className='flex items-center justify-evenly h-[200px] bg-3 rounded-tr-md rounded-b-md'>
                <div className='bg-2 h-[150px] w-[280px] rounded-md'></div>
                <div className='bg-2 h-[150px] w-[280px] rounded-md'></div>
                <div className='bg-2 h-[150px] w-[280px] rounded-md'></div>
                <div className='bg-2 h-[150px] w-[280px] rounded-md'></div>
            </div> 
        </div>
    );
};

export default TopProducts;