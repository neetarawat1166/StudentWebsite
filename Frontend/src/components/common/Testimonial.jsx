import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import '../style/NeetaStyle/style2.css'
import img1 from '../../images/testimonialbg.png'

export default function Testimonial() {
  return (
    <div className='section NeetaSwiper'>
      <div className='cotainer mx-auto'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center'>Testimonial</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper mb-8 md:mb-[50px]"
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
          <SwiperSlide><TestimonialCard/></SwiperSlide>
        </Swiper>
        <div className='md:w-[60%] flex justify-center items-center mx-auto'>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
