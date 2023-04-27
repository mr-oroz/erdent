import React from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import OurDoctor from '../our-doctor';
import { Autoplay } from "swiper";

import 'swiper/css';
const SwiperScroll = () => {

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

  return (
    <Swiper
      breakpoints={breakpoints}
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
      <SwiperSlide><OurDoctor /></SwiperSlide>
    </Swiper>
  );
};

export default SwiperScroll;