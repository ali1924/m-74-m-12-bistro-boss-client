import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
        .then(data=>setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(item => <SwiperSlide
                    key={item._id}
                    >
                        <div className='flex flex-col items-center m-16 space-y-1'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            <p>{item.details}</p>
                            <h3 className='text-2xl text-orange-400'>{item.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;