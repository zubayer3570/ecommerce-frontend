import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'

const TopProducts = () => {
    return (
        <div className='m-4'>
            <div className='flex items-center justify-center h-[40px] w-[150px] bg-3 rounded-t-md'>
                <p className='font-bold text-[white]'>Top Products</p>
            </div>
            <div className='bg-3 pt-6 px-6 rounded-b-md rounded-tr-md'>
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500
                    }}
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    style={{paddingBottom: "35px"}}
                >
                    <SwiperSlide><img src="./1.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./2.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./3.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./1.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./2.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./3.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./1.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./2.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./3.jpg" className='w-full rounded-md' alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopProducts;