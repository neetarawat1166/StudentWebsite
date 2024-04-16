import React from 'react';
import img from '../../../images/AboutBannerImg4.jpg';

const AboutBanner = () => {
  return (
    <section className='relative' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: '500px'}}>
      <div className="absolute inset-0 bg-gray-500 bg-opacity-[80%]"></div>
      {/* <div className="absolute bottom-[27%] right-[19%] w-[52%] h-[50%] bg-transparent p-4 border-[2px] border-[#65bc7b]"></div> */}
      <div className="absolute bottom-[30%] right-[20%] w-[50%] bg-transparent p-4">
        <h2 className="text-white text-[65px] text-center font-semibold">
            About Us!
        </h2>
        <p className='text-white text-lg text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis facilis voluptate consequuntur fuga cumque. Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tempora, cupiditate ea commodi quaerat natus expedita illo. Ratione, similique veritatis.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
