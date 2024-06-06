import React from 'react'
import img from '../../images/Akash_sir.png';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../../components/style/KirtikaStyle/KirtikaCSS.css'

const CloudTeacherProfile = () => {
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
              <h3 className="text-3xl font-bold pb-2 text-[#d19747]">Mr. Akash Gaur</h3>
              <h4 className='font-[700] text-[20px] text-[#003366]'>Senior DevOps Instructor</h4>
              <p className='text-[15px]'>Our instructor not only possess in-depth knowledge of cloud platforms and DevOps practices but also have a passion for teaching. He guide our students in harnessing the power of cloud technologies.</p>
              <h4 className='font-[700] text-[20px] mt-2 text-[#003366]'>His Experience</h4>
              <p className='text-[15px]'>Akash Holds 8+ Years of experience in the field of devops</p>
              <div className='flex gap-4 py-4'>
                <NavLink to='https://www.linkedin.com/in/gaur95'><FaLinkedin className='text-[40px] text-[#d19747]' /></NavLink>
                <NavLink to='https://Akash.upflairs@gmail.com'><SiGmail className='text-[40px] text-[#d19747]' /></NavLink>
                {/* <FaSquareXTwitter className='text-[40px] text-[#d19747]' /> */}
                <NavLink to='https://www.github.com/gaur95'><FaGithub className='text-[40px] text-[#d19747]'/></NavLink>
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

export default CloudTeacherProfile