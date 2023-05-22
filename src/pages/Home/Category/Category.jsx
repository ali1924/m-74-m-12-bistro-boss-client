import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slide1 from '../../../assets/home/category/slide1.jpg';
import slide2 from '../../../assets/home/category/slide2.jpg';
import slide3 from '../../../assets/home/category/slide3.jpg';
import slide4 from '../../../assets/home/category/slide4.jpg';
import slide5 from '../../../assets/home/category/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div className='mb-24'>
            <SectionTitle
                subHeading={`---From 11:00am to 10:00pm---`}
                heading={`ORDER ONLINE`}
            ></SectionTitle>
            <Swiper
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl text-center uppercase text-white -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl text-center uppercase text-white -mt-16'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl text-center uppercase text-white -mt-16'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl text-center uppercase text-white -mt-16'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl text-center uppercase text-white -mt-16'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;