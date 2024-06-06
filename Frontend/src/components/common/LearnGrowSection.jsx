import React from 'react';
import LearnGrowImg1 from '../../images/LearnGrowImg1.webp'
import LearnGrowImg2 from '../../images/LearnGrowImg2.webp'
import LearnGrowImg3 from '../../images/LearnGrowImg3.webp'
import LearnGrowBackImg from '../../images/LearnGrowBackImg.png'
import LearnGrowBackImg2 from '../../images/LearnGrowBackImg2.png'
import LearnGrowBackImg3 from '../../images/LearnGrowBackImg3.png'
import { IoMdCheckboxOutline } from "react-icons/io";
import '../style/KirtikaStyle/KirtikaCSS.css'
import { NavLink } from 'react-router-dom';
const LearnGrowSection = () => {
  return (
    <section className='bg-[#d9e7ff]'>
      <div className="container mx-auto px-[50px] py-[50px] relative z-[1]">
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
        <div className="lg:w-1/2 justify-center items-center md:pl-4 lg:pl-4 xl:pl-4">
        <span className='inline-block bg-[#003366] rounded-lg p-2 mt-[5%] md:mt-0 text-white'>WHO WE ARE</span>
          <h2 className='text-[30px] sm:text-[35px] md:text-[40px] font-semibold pb-2 pt-[2%] md:pt-[5%]'>Fostering Growth with Education and Paving the Way for Achievement!</h2>
          <p className='w-[95%] lg:w[75%] text-[17px] sm:text-[17px] md:text-[17px] md:pt-4 pb-1'>At Upflairs, we're passionate about transforming learning into opportunities for personal growth. With a range of dynamic educational programs and services, we create pathways to success that match each student's aspirations. From engaging workshops to personalized guidance, we're here to nurture your development every step of the way. Led by experienced mentors, our team is dedicated to helping you achieve mastery in your chosen field.</p>
          <div className="flex lg:flex-row pt-4 md:w-[80%] lg:w-[80%]  pb-8">
            <div className="lg:w-1/2">
              {/* <h3 className="text-xl text-[#ff9416] font-semibold pb-3">Flexible Classes 1</h3> */}
              <ul>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2 md:text-[17px]' />
                  <span>Innovation</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2 md:text-[17px]' />
                  <span>Empowerment</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2 md:text-[17px]' />
                  <span>Personalization</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2 md:text-[17px]' />
                  <span>Growth</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 pl-5 sm:pl-8 md:pl-[90px] lg:pl-2">
              {/* <h3 className="text-xl text-[#ff9416] font-semibold pb-3">Flexible Classes 2</h3> */}
              <ul>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2' />
                  <span>Immersion</span>
               . </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2' />
                  <span>Guidance</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2' />
                  <span>Expertise</span>
                </li>
                <li className="flex items-center pb-1">
                  <IoMdCheckboxOutline icon="checkbox-outline" className='text-[#ff9416] text-lg mr-2' />
                  <span>Mastery</span>
                </li>
              </ul>
            </div>
          </div>
          <NavLink to={'/about'}><button className='bg-[#003366] text-lg text-white py-4 px-4 font-semibold hover:bg-[#ff9416] rounded-lg'>More About Us</button></NavLink>
        </div>
      </div>
    </div>
    </section>
  );
};

export default LearnGrowSection;
