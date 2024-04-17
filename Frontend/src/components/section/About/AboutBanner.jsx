import React from 'react';
import img from '../../../images/AboutBannerImg4.jpg';
import aboutBannerIcon1 from '../../../images/aboutBannerIcon1.png'
import aboutBannerIcon2 from '../../../images/aboutBannerIcon2.png'

const AboutBanner = () => {
  return (
    <section className='relative py-[100px]' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: 'auto' }}>
      <div className="absolute inset-0 bg-gray-500 bg-opacity-[75%]"></div>
      <div className='absolute top-[60%] left-[10%] rotate-[-30deg] linear duration-1000 delay-0 hidden lg:block'>
        <img src={aboutBannerIcon2} alt="aboutBannerIcon2" width="70px" height="auto" />
      </div>
      <div className='absolute top-[15%] left-[85%] rotate-45 linear duration-1000 delay-0 hidden lg:block'>
        <img src={aboutBannerIcon1} alt="aboutBannerIcon1" width="70px" height="auto" />
      </div>
      {/* <div className="w-[50%] h-[50%] absolute bg-gray-100 bg-opacity-[70%]"></div> */}
      {/* <div className="absolute bottom-[27%] right-[19%] w-[52%] h-[50%] bg-transparent p-4 border-[2px] border-[#65bc7b]"></div> */}
      <div className="w-[85%] md:w-[50%] px-8 pb-8 mx-auto z-50 relative bg-[#eeeeee] opacity-[75%] rounded-xl">
        <h2 className="text-[#65bc7b] text-[45px] md:text-[75px] text-center font-semibold">
          About Us!
        </h2>
        <p className='text-gray-600 text-lg text-center'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis facilis voluptate consequuntur fuga cumque. Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tempora, cupiditate ea commodi quaerat natus expedita illo. Ratione, similique veritatis."
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
