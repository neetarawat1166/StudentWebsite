import React, { useContext } from 'react';
import LogoBlack from '../images/LogoBlack.png'
import FooterImg1 from '../images/FooterImg1.jpg'
import FooterImg2 from '../images/FooterImg2.jpg'
import FooterImg3 from '../images/FooterImg3.jpg'
import FooterImg4 from '../images/FooterImg4.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
// import des3 from '../images/ctades3.png'
import UpflairsLogo from '../images/UpflairsLogo.png'
import { isAuthenticatedContext } from '../context/userContext';
const Footer = () => {
  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );
  return (
    <footer className="bg-[#003366] text-gray-300 pt-4 px-10">
      <div className="container mx-auto px-4 pt-[50px]">
        <div className="flex flex-wrap justify-center">
          {/* First column (wider) */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-2/5 px-4 pb-4 sm:pb-[15px] md:pb-0">
          {/* <div className=' hidden lg:block absolute top-[30px] right-[55px] animate-spin duration-1000 linear delay-0 infinite normal none running'>
                    <img src={des3} alt="CTA" />
                </div> */}
            <NavLink to=''><img src={UpflairsLogo} alt="logo" className='sm:mx-0' width="250px" height="auto" /></NavLink>
            <p className='w-[100%] sm:w-[80%] pt-4 pb-6'>Empowering learners with VR-driven, engaging skill development programs for industry readiness, aiming to transform education delivery and prepare talent for the job market.</p>
            <div className="flex items-center">
              <div className="flex space-x-6 sm:space-x-4">
                <div className="bg-[#ff9416] rounded-full p-2">
                <NavLink to="https://www.instagram.com/upflairs_pvt_ltd?igsh=MWx6c2JheGloa210MA=="><FaInstagram className="text-white cursor-pointer" size={24} /></NavLink>
                </div>
                <div className="bg-[#ff9416] rounded-full p-2">
                <NavLink to="https://www.facebook.com/p/Upflairs-Pvt-Ltd-100071105106234/"><FaFacebookF className="text-white cursor-pointer" size={24} /></NavLink>
                </div>
                <div className="bg-[#ff9416] rounded-full p-2">
                <NavLink to="https://www.linkedin.com/company/upflairs/"><FaLinkedinIn className="text-white cursor-pointer" size={24} /></NavLink>
                </div>
                {/* <div className="bg-[#ff9416] rounded-full p-2">
                  <FaPinterestP className="text-white" size={24} />
                </div> */}
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 px-4 pb-4 sm:pb-[15px] sm:pt-[70px]  md:pb-0 lg:pt-6">
            <h3 className="text-[25px] font-bold pb-2 text-[#ff9416]">Our Services</h3>
            <ul className="list-none">
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/dashboard" className="text-[#eeeeee] hover:text-[#ff9416]">Dashboard</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/assignment" className="text-[#eeeeee] hover:text-[#ff9416]">Assignment</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/resources" className="text-[#eeeeee] hover:text-[#ff9416]">Resources</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                 <NavLink to="/cloudcomputingsyllabus" className="text-[#eeeeee] hover:text-[#ff9416]">Syllabus</NavLink>
                {user && user.course === "Cloud Computing & DevOps" && ( <NavLink to="/cloudcomputingsyllabus" className="text-[#eeeeee] hover:text-[#ff9416]">Syllabus</NavLink>)}
                {user && user.course === "Data Science & Machine Learning with AI" && ( <NavLink to="/datasciencesyllabus" className="text-[#eeeeee] hover:text-[#ff9416]">Syllabus</NavLink>)}
                {user && user.course === "Full Stack Web Development" && ( <NavLink to="/fullstacksyllabus" className="text-[#eeeeee] hover:text-[#ff9416]">Syllabus</NavLink>)}
                {user && user.course === "Embedded Systems & Robotics with IOT" && ( <NavLink to="/embeddedsystemssyllabus" className="text-[#eeeeee] hover:text-[#ff9416]">Syllabus</NavLink>)}
              </li>
              {/* <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li> */}
            </ul>
          </div>

          {/* Third column */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 px-4 pb-4 sm:pt-10 md:pb-0 lg:pt-6">
            <h3 className="text-[25px] font-bold mb-2 text-[#ff9416]">Connect With Us</h3>
            <ul className="list-none">
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/about" className="text-[#eeeeee] hover:text-[#ff9416]">About</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/contact" className="text-[#eeeeee] hover:text-[#ff9416]">Contact</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/query" className="text-[#eeeeee] hover:text-[#ff9416]">Query</NavLink>
              </li>
              {/* <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li> */}
            </ul>
          </div>

          {/* Fourth column */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 px-4 pb-4 sm:pt-10 md:pb-0 lg:pt-6">
            <h3 className="text-2xl font-bold pb-7 text-[#ff9416]">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img src={FooterImg1} alt="Image 1" className="rounded-lg" width="150px" height="auto" />
              </div>
              <div className="col-span-1">
                <img src={FooterImg3} alt="Image 2" className="rounded-lg" width="150px" height="auto" />
              </div>
              <div className="col-span-1">
                <img src={FooterImg2} alt="Image 3" className="rounded-lg" width="150px" height="auto" />
              </div>
              <div className="col-span-1">
                <img src={FooterImg4} alt="Image 4" className="rounded-lg" width="150px" height="auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <p className='pt-[50px] pb-3'>Copyright © 2023 <span className='text-[#ff9416]'><NavLink to='https://upflairs.com/'>Upflairs Pvt Ltd.</NavLink></span> || All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
