"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
    return (
        <>
        
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
                   
            <SwiperSlide><Image src="https://i.postimg.cc/0jDVqSGQ/Image-1-00001.jpg" alt="Banner Image"/></SwiperSlide>
            <SwiperSlide><Image src="https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg" alt="Banner Image"/></SwiperSlide>
            <SwiperSlide><Image src="https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg" alt="Banner Image"/></SwiperSlide>
            <SwiperSlide><Image src="https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg" alt="Banner Image"/></SwiperSlide>
            <SwiperSlide><Image src="https://i.postimg.cc/fyY06783/nit-patna-005.jpg" alt="Banner Image"/></SwiperSlide>
          </Swiper>
        </>
      );
}

export default Slider

