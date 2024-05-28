import React from 'react'
import img from '../../images/SidSir.jpg';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../../components/style/KirtikaStyle/KirtikaCSS.css'

const IOTTeacherProfile = () => {
    return (
        <div className='py-[50px]'>
          <h1 className='text-[35px] font-semibold pb-2 text-[#003366]'>About Instructor</h1>
          <div className='bg-[#D9E7FF] p-5 pb-14 gap-7 relative rounded-xl border-2 border-[#d19747] overflow-hidden grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3'>
            {/* Image Section */}
            <div className="md:col-span-1 flex justify-center items-center h-full">
              <img className="TeacherFeatureImg rounded-xl w-full h-full object-cover mx-auto border border-[#d19747]" src={img} alt="Teacher" width="250px" height="auto" />
            </div>
            {/* Text Section */}
            <div className="md:col-span-2 justify-center">
              <h3 className="text-3xl font-bold pb-2 text-[#d19747]">Mr. Siddhart Singh</h3>
              <h4 className='font-[700] text-[20px] text-[#003366]'>Senior DevOps Instructor</h4>
              <p className='text-[15px]'>Siddharth being the company's director , not only manages the company well but is also a wonderful Instructor. With years of industry experience and a passion for innovation,he brings unparalleled expertise to our courses and learning to the students.</p>
              <h4 className='font-[700] text-[20px] mt-2 text-[#003366]'>His Experience</h4>
              <p className='text-[15px]'>Siddharth is having an experience of 10+ years in the field of IoT , Embedded System & Robotics.</p>
              <div className='flex gap-4 py-4'>
                <FaLinkedin className='text-[40px] text-[#d19747]' />
                <SiGmail className='text-[40px] text-[#d19747]' />
                <FaSquareXTwitter className='text-[40px] text-[#d19747]' />
              </div>
            </div>
            {/* Social Media Icons Section */}
            <div className='bg-[#d19847be] px-[20px] absolute bottom-0 left-0 w-full py-4 flex justify-start gap-3 sm:col-span-3 md:col-span-3'>
              {/* <FaLinkedin className='text-[27px] text-white' />
              <SiGmail className='text-[27px] text-white' />
              <FaSquareXTwitter className='text-[27px] text-white' /> */}
            </div>
          </div>
        </div>
      );
}

export default IOTTeacherProfile