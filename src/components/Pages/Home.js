import React, { useEffect } from 'react';
import HomePageBanner from '../main-components/HomePageBanner';
import TopProducts from '../main-components/TopProducts';
// import products from '../../data'
import ProductCard from '../main-components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../features/userSlice';
import { fetchAllProducts } from '../../features/productSlice';

const Home = () => {
    const { allProducts } = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    return (
        <>
            <HomePageBanner />
            <TopProducts />
            <p className='text-[30px] font-bold text-3 text-center mt-12 mb-6'>All Products</p>
            <div className='grid grid-cols-4 mx-4 gap-4'>
                {allProducts?.map(product => <ProductCard productData={product} key={product._id} />)}
            </div>
        </>
    );
};

export default Home;