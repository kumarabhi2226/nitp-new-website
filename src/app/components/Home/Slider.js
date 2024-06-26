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

const Slider = () => {
    return (
        <>
        
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
                   
            <SwiperSlide><img src="https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/fyY06783/nit-patna-005.jpg" /></SwiperSlide>
          </Swiper>
        </>
      );
}

export default Slider

