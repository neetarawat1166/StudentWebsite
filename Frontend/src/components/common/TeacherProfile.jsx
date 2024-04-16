import React from 'react';
import img from '../../images/Akash_sir.png';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../style/KirtikaStyle/KirtikaCSS.css'

const TeacherProfile = () => {
  return (
    <div className='py-[50px]'>
      <h1 className='text-[35px] font-semibold pb-2'>About Instructor</h1>
      <div className='bg-[#eeeeee] p-5 pb-14 gap-7 relative rounded-xl border-2 border-[#65bc7b] overflow-hidden grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3'>
        {/* Image Section */}
        <div className="md:col-span-1 flex justify-center items-center h-full">
          <img className="TeacherFeatureImg rounded-xl w-full h-full object-cover mx-auto border border-[#65bc7b]" src={img} alt="Teacher" width="250px" height="auto" />
        </div>
        {/* Text Section */}
        <div className="md:col-span-2 justify-center">
          <h3 className="text-3xl font-bold pb-2">Akash Gaur</h3>
          <h4 className='font-[700] text-[20px] text-[#65bc7b]'>Senior DevOps Instructor</h4>
          <p className='text-[15px]'>He not only possesses in-depth knowledge of cloud platforms and DevOps practices but also has a passion for teaching. He guides our students in harnessing the power of cloud technologies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloribus.</p>
          <h4 className='font-[700] text-[20px] mt-2 text-[#65bc7b]'>His Experience</h4>
          <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia explicabo, a ex quaerat sapiente! Lorem ipsum dolor sit amet.</p>
          <div className='flex gap-4 py-4'>
            <FaLinkedin className='text-[40px] text-[#65bc7b]' />
            <SiGmail className='text-[40px] text-[#65bc7b]' />
            <FaSquareXTwitter className='text-[40px] text-[#65bc7b]' />
          </div>
        </div>
        {/* Social Media Icons Section */}
        <div className='bg-[#65bc7b] px-[20px] absolute bottom-0 left-0 w-full py-4 flex justify-start gap-3 sm:col-span-3 md:col-span-3'>
          {/* <FaLinkedin className='text-[27px] text-white' />
          <SiGmail className='text-[27px] text-white' />
          <FaSquareXTwitter className='text-[27px] text-white' /> */}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
