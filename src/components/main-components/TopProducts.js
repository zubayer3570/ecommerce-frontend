import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'

const TopProducts = () => {
    return (
        <div className='m-4'>
            {/* <div className= h-[40px] w-[150px] bg-3 rounded-t-md'>
                <p className='font-bold text-[white]'>Top Products</p>
            </div> */}
            <p className='bg-3 rounded-t-md font-bold text-[white] px-3 py-2 inline-block text-[14px]'>Top Products</p>
            <div className='hidden lg:block bg-3 pt-4 lg:pt-4 px-4 rounded-b-md rounded-tr-md'>
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500
                    }}
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    style={{ paddingBottom: "16px" }}
                >
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./1-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./2-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./3-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./1-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./2-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./3-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./1-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./2-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./3-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='lg:hidden bg-3 pt-4 lg:pt-6 px-4 rounded-b-md rounded-tr-md'>
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500
                    }}
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    style={{ paddingBottom: "25px" }}
                >
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./1-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./2-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./3-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[120px] overflow-hidden rounded-md'>
                            <img src="./1-top.jpg" className='w-full' alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopProducts;