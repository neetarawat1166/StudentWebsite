import React from 'react';
import BannerImg from '../../images/BannerImg.png'
import BannerBackImg from '../../images/BannerBackImg.jpg'
import BannerBack4 from '../../images/BannerBack4.png'
import BannerBack3 from '../../images/BannerBack3.png'
import BannerBack5 from '../../images/BannerBack5.png'
import '../style/KirtikaStyle/KirtikaCSS.css'
const Banner = () => {
  return (
    <section className="bg-gray-200 p-[50px] pb-0 relative" style={{ backgroundImage: `url(${BannerBackImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 lg:pr-8 mb-8 lg:mb-0"> {/* First column, 3/4 width on large screens */}
          <h1 className="text-[38px] sm:text-[45px] md:text[50px] font-bold text-[#65bc7b] pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
          <p className="text-[20px] font-semibold pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam accusamus ipsam tempora! Autem itaque exercitationem error! Ea, autem neque? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='text-[20px] font-semibold bg-[#65bc7b] py-3 px-4 rounded-lg text-white hover:bg-[#4c9e61]'>Explore More!</button>
        </div>
        <div className="lg:w-1/3"> {/* Second column, 1/4 width on large screens */}
          <img src={BannerImg} alt="Your Image" className="w-full" />
          <div className='absolute top-[6%] left-[25%] rotate-12 linear duration-1000 delay-0 hidden lg:block'>
                    <img src={BannerBack5} alt="BannerBack" width="70px" height="auto" />
          </div>
          <div className='absolute top-[5%] left-[89%] rotate-12 spinAnimate linear duration-2000 delay-0 running normal none infinite hidden lg:block'>
                    <img src={BannerBack3} alt="BannerBack2" width="100px" height="auto" />
          </div>
          <div className='absolute top-[70%] left-[55%] rotate-45 linear duration-1000 delay-0 hidden lg:block'>
                    <img src={BannerBack4} alt="BannerBack" width="100px" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
