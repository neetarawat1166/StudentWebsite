import React from 'react';
import img from '../../images/Akash_sir.png';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const TeacherProfile = () => {
  return (
    <div className='py-[50px]'>
      <h1 className='text-[35px] font-semibold pb-2'>About Instructor</h1>
      <div className='bg-[#eeeeee] rounded-xl pt-5 border-2 border-[#65bc7b] overflow-hidden'>
        <div className='flex px-[20px] pb-3'>
          {/* Image Section */}
          <div className="w-[30%]">
            <img className="rounded-full mx-auto" src={img} alt="Teacher" width="60px" height="auto" />
          </div>
          {/* Text Section */}
          <div className="w-[70%]">
            <p className="text-lg font-bold">Akash Gaur</p>
            <p className='font-semibold'>Senior DevOps Instructor</p>
          </div>
        </div>
        <div className='pb-4 px-[20px]'>
          <p>He not only possess in-depth knowledge of cloud platforms and DevOps practices but also have a passion for teaching. He guide our students in harnessing the power of cloud technologies.</p>
        </div>
        <div className='flex gap-3 bg-[#65bc7b] px-[20px] py-2'>
        <FaLinkedin className='text-[27px] text-white' />
        <SiGmail className='text-[27px] text-white' />
        <FaSquareXTwitter className='text-[27px] text-white' />
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
