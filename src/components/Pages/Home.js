import React from 'react';
import HomePageBanner from '../main-components/HomePageBanner';
import TopProducts from '../main-components/TopProducts';
import products from '../../data'
import ProductCard from '../main-components/ProductCard';

const Home = () => {
    return (
        <>
            <HomePageBanner />
            <TopProducts />
            <div className='grid grid-cols-4 mx-2'>
                {products.map(product => <ProductCard productData={product} key={product.id} />)}
            </div>
        </>
    );
};

export default Home;