import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'
const HomePageBanner = () => {
    return (
        <div className='mx-4 rounded-md overflow-hidden'>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500
                }}
                loop={true}
            >
                <SwiperSlide><img src="./1.jpg" className='w-full' alt="" /></SwiperSlide>
                <SwiperSlide><img src="./2.jpg" className='w-full' alt="" /></SwiperSlide>
                <SwiperSlide><img src="./3.jpg" className='w-full' alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomePageBanner;
