import React from 'react'
import img from '../../images/RanjitSir.jpg';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../../components/style/KirtikaStyle/KirtikaCSS.css'

const DataScienceTeacherProfile = () => {
    return (
        <div className='py-[50px]'>
          <h1 className='text-[35px] font-semibold pb-2 text-[#003366]'>About Instructor</h1>
          <div className='bg-[#D9E7FF] p-5 pb-14 gap-7 relative rounded-xl border-2 border-[#d19747] overflow-hidden grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3'>
            {/* Image Section */}
            <div className="md:col-span-1 flex justify-center items-center">
              <img className="TeacherFeatureImg rounded-xl w-[75%] object-cover mx-auto border border-[#d19747]" src={img} alt="Teacher" />
            </div>
            {/* Text Section */}
            <div className="md:col-span-2 justify-center">
              <h3 className="text-3xl font-bold pb-2 text-[#d19747]">Mr. Ranjit Singh</h3>
              <h4 className='font-[700] text-[20px] text-[#003366]'>Data Sciencce Instructor</h4>
              <p className='text-[15px]'>With a keen understanding of industry trends and a passion for teaching, our Data Science Instructor is at the forefront of empowering the students with the tools and knowledge needed to excel in this rapidly evolving field.</p>
              <h4 className='font-[700] text-[20px] mt-2 text-[#003366]'>His Experience</h4>
              <p className='text-[15px]'>Ranjit Holds an experience of 2+ years and is highly expert in the field of data science</p>
              <div className='flex gap-4 py-4'>
                <NavLink to='https://linkedin.com/in/ranjit-singh-423a051a6'><FaLinkedin className='text-[40px] text-[#d19747]' /></NavLink>
                <NavLink to='https://ranjit.upflairs@gmail.com'><SiGmail className='text-[40px] text-[#d19747]' /></NavLink>
                {/* <FaSquareXTwitter className='text-[40px] text-[#d19747]' /> */}
                <NavLink to='https://www.github.com/Ranjit-Singh-786 '><FaGithub className='text-[40px] text-[#d19747]'/></NavLink>
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

export default DataScienceTeacherProfile