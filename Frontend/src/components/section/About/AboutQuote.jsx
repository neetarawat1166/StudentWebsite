import React from 'react'
import AboutQuoteCard from './AboutQuoteCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../style/KirtikaStyle/KirtikaCSS.css'
import 'swiper/css';
import 'swiper/css/pagination';
const AboutQuote = () => {
  return (
    <div className='section pb-[50px]'>
      <div className='container AboutQuotesMainDiv mx-auto w-[400px] sm:w-[600px] md:w-[850px]'>
        <h1 className='text-3xl md:text-4xl lg:text-4xl font-bold pb-8 text-center text-[#65bc7b]'>Insights From Our Team</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper pb-8 md:pb-[50px]"
          breakpoints={{
            768: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide><AboutQuoteCard/></SwiperSlide>
          <SwiperSlide><AboutQuoteCard/></SwiperSlide>
          <SwiperSlide><AboutQuoteCard/></SwiperSlide>
        </Swiper>
        <div className='md:w-[60%] flex justify-center items-center mx-auto'>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutQuote