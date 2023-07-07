import React, { useEffect } from 'react';
import HomePageBanner from '../main-components/HomePageBanner';
import TopProducts from '../main-components/TopProducts';
// import products from '../../data'
import ProductCard from '../main-components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateFooter } from '../../features/footerSlice';
import { FacebookProvider, CustomChat } from 'react-facebook'
import { auth } from '../../init.firebase';
import AllProducts from '../main-components/AllProducts';
import Spinner from '../main-components/Spinner';

const Home = () => {
    const dispatch = useDispatch()
    const { allProducts } = useSelector(state => state.product)
    useEffect(() => { dispatch(updateFooter(document.getElementById("height")?.offsetHeight)) }, [allProducts])
    return (
        <>
            <HomePageBanner />
            <TopProducts />
            <p className='text-[30px] font-bold text-3 text-center mt-12 mb-6'>All Products</p>
            <AllProducts />
            {/* <FacebookProvider appId='1369564030289731'>
                <CustomChat pageId='101280129700771' />
            </FacebookProvider> */}
        </>
    );
};

export default Home;