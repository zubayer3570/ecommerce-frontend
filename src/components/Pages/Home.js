import React from 'react';
import HomePageBanner from '../main-components/HomePageBanner';
import NavigationBar from '../main-components/NavigationBar';
import TopProducts from '../main-components/TopProducts';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <HomePageBanner images={["./1png", "./1.png", "./1png", "./1.png", "./1png", "./1.png",]} />
            <TopProducts />
        </div>
    );
};

export default Home;