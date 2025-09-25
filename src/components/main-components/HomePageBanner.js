import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"

import { Controller, Pagination } from 'swiper'
import { Autoplay } from 'swiper'
const HomePageBanner = () => {
    return (
        <div className=' overflow-hidden'>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, Controller]}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
                controller={true}
            >
                <SwiperSlide>
                    <div className='flex items-center w-full overflow-hidden h-[180px] lg:h-auto'>
                        <img src="./1.jpg" className='scale-[2] lg:scale-[1]' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center w-full overflow-hidden h-[180px] lg:h-auto'>
                        <img src="./2.jpg" className='scale-[2] lg:scale-[1]' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center w-full overflow-hidden h-[180px] lg:h-auto'>
                        <img src="./3.jpg" className='scale-[2] lg:scale-[1]' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomePageBanner;
