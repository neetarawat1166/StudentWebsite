import React from 'react';
import LogoBlack from '../images/LogoBlack.png'
import FooterImg1 from '../images/FooterImg1.webp'
import FooterImg2 from '../images/FooterImg2.webp'
import FooterImg3 from '../images/FooterImg3.jpeg'
import FooterImg4 from '../images/FooterImg4.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import UpflairsLogo from '../images/UpflairsLogo.png'
const Footer = () => {
  return (
    <footer className="bg-[#003366] text-gray-300 pt-4 px-10">
      <div className="container mx-auto px-4 pt-[50px]">
        <div className="flex flex-wrap justify-center">
          {/* First column (wider) */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-2/5 px-4 pb-4 sm:pb-[15px] md:pb-0">
            <img src={UpflairsLogo} alt="logo" className='sm:mx-0' width="250px" height="auto" />
            <p className='w-[100%] sm:w-[80%] pt-4 pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fugit illum error in vitae? Quisquam aspernatur consequatur dolorum asperiores accusamus!</p>
            <div className="flex items-center">
              <div className="flex space-x-6 sm:space-x-4">
                <div className="bg-[#ff9416] rounded-full p-2">
                  <FaInstagram className="text-white" size={24} />
                </div>
                <div className="bg-[#ff9416] rounded-full p-2">
                  <FaFacebookF className="text-white" size={24} />
                </div>
                <div className="bg-[#ff9416] rounded-full p-2">
                  <FaXTwitter className="text-white" size={24} />
                </div>
                <div className="bg-[#ff9416] rounded-full p-2">
                  <FaPinterestP className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 px-4 pb-4 sm:pb-[15px] sm:pt-[70px]  md:pb-0 lg:pt-6">
            <h3 className="text-[25px] font-bold pb-2 text-[#ff9416]">Our Services</h3>
            <ul className="list-none">
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Web Development</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">UI/UX Design</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Management</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li>
            </ul>
          </div>

          {/* Third column */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 px-4 pb-4 sm:pt-10 md:pb-0 lg:pt-6">
            <h3 className="text-[25px] font-bold mb-2 text-[#ff9416]">Quick Links</h3>
            <ul className="list-none">
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Web Development</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">UI/UX Design</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Management</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li>
              <li className="flex items-center py-2">
                <MdKeyboardArrowRight className="pr-2" size={24} />
                <NavLink to="/" className="text-[#eeeeee] hover:text-[#ff9416]">Digital Marketing</NavLink>
              </li>
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
          <p className='pt-[50px] pb-3'>Copyright © 2023 <span className='text-[#ff9416]'>Upflairs</span> || All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
