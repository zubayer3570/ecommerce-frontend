import React from 'react';
import Search from '../main-components/Search';
import Footer from '../main-components/Footer';

const SearchPage = () => {
    return (
        <>
            <div className='mx-4'>
                <Search />
                {/* <input type="text" name='title' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' /> */}
            </div>
            <Footer position="absolute" />
        </>
    );
};

export default SearchPage;