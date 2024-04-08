import React from 'react';
import LearnGrowImg1 from '../../images/LearnGrowImg1.webp'
import LearnGrowImg2 from '../../images/LearnGrowImg2.webp'
import LearnGrowImg3 from '../../images/LearnGrowImg3.webp'
import LearnGrowBackImg from '../../images/LearnGrowBackImg.png'
import LearnGrowBackImg2 from '../../images/LearnGrowBackImg2.png'
import LearnGrowBackImg3 from '../../images/LearnGrowBackImg3.png'
import { IoMdCheckboxOutline } from "react-icons/io";
import '../style/KirtikaStyle/KirtikaCSS.css'
const LearnGrowSection = () => {
  return (
    <div className="container mx-auto px-[50px] py-[50px] relative">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex">
          <div className="w-[100%] sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col justify-center gap-5">
            {/* <img src={LearnGrowImg1} alt="LearnGrowImg1" className='mx-auto block sm:hidden md:hidden lg:hidden' width="100%" height="auto" /> */}
            <img src={LearnGrowImg2} alt="LearnGrowImg1" className='learnAndGrowImg1 mx-auto w-[100%] sm:w-[200px] md:w-[200px] lg:w-[200px] lg:mr-[50px] block sm:block md:block lg:block' width="200px" height="auto" />
            <img src={LearnGrowImg1} alt="LearnGrowImg2" className='learnAndGrowImg2 mx-auto hidden sm:block md:block lg:block sm:w-[200px] md:w-[200px] lg:w-[200px] lg:mr-[50px]' width="200px" height="auto" />
            <div className="absolute inset-0 z-[-1] hidden md:block lg:hidden" style={{ backgroundImage: `url(${LearnGrowBackImg})`, backgroundRepeat: 'no-repeat', animation: 'moveBackground2 3s infinite alternate', width:'200px' ,height:'200px'}}></div>
            <div className="absolute  inset-0 z-[-1] lg:left-[5%] lg:top-[8%] animate-moveBackground hidden lg:block" style={{ backgroundImage: `url(${LearnGrowBackImg})`, backgroundRepeat: 'no-repeat', animation: 'moveBackground 3s infinite alternate', width:'200px' ,height:'200px'}}></div>
            <div className='absolute top-[60%] left-[85%] animate-spin linear duration-1000 delay-0 running normal none infinite hidden lg:block'>
                    <img src={LearnGrowBackImg2} alt="CTA" />
            </div>
            <div className='absolute top-[87%] left-[35%] rotate-45 linear duration-1000 delay-0 hidden lg:block'>
                    <img src={LearnGrowBackImg3} alt="CTA" />
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 flex items-center justify-start z-10">
            <img src={LearnGrowImg3} alt="LearnGrowImg3" className='learnAndGrowImg3 hidden sm:block md:block lg:block' width="300px" height="auto" />
          </div>
        </div>
        <div className="lg:w-1/2 justify-center items-center lg:pl-4 xl:pl-4">
          <h2 className='text-4xl font-semibold pb-2 pt-[5%]'>Lorem ipsum dolor, sit amet sit amet consectetur adipisicing.</h2>
          <p className='w-[95%] lg:w[75%] text-lg pt-4 pb-1'>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt. Sunt, voluptatibus. amet consectetur adipisicing elit. Suscipit incidunt non tempora nobis blanditiis numquam impedit sed harum nam quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, at odio alias vel voluptas debitis fuga? Ipsam, nemo! Maiores, molestias.</p>
          <div className="flex lg:flex-row pt-4 md:w-[80%] lg:w-[80%]  pb-8">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold pb-3">Flexible Classes 1</h3>
              <ul>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Lorem ipsum dolor sit</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Explicabo, velit!</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Some other item</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Some other item</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 pl-5 sm:pl-8 md:pl-[90px] lg:pl-2">
              <h3 className="text-xl font-semibold pb-3">Flexible Classes 2</h3>
              <ul>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Lorem ipsum dolor sit</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Explicabo, velit!</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Some other item</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#65bc7b] text-lg mr-2' />
                  <span>Some other item</span>
                </li>
              </ul>
            </div>
          </div>
          <button className='bg-[#65bc7b] text-lg text-white py-4 px-4 font-semibold  rounded-lg'>More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default LearnGrowSection;
