import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";
import Modal from "./common/Modal";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Modal>
      <nav className="bg-[#eeeeee] px-3 py-3 flex justify-between relative">
        <div className="flex items-center gap-[3rem]">
          <IoMenu
            className="text-3xl text-black cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
          <div className="text-black">
            <img src={logo} className="md:w-[100px] w-[80px]" alt="logo" />
          </div>
          <div className="hidden lg:block relative">
            <ul className="flex gap-[2rem] text-black">
              <li className="text-lg relative py-4">
                <NavLink
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg relative py-4">
                <NavLink
                  to="/About" 
                >
                  About
                </NavLink>
              </li>
              <li className="text-lg relative py-4">
                <NavLink
                  to="/contact"
                 
                >
                  Contact
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="overflow-hidden">
            <ul className="flex gap-3">
              <li>
                {/* <FaInstagram className="bg-[#FF9416] md:h-[40px] w-[30px] h-[30px] p-[5px] md:p-[10px] border-2 border-[#FF9416] hover:bg-transparent rounded-md text-white" />  */}
                <p className="bg-[#65bc7b] py-1 px-2 text-white text-lg rounded-md hover:bg-[#252525]">Signup</p>
              </li>
              <li>
              <p className="bg-[#252525] py-1 px-2 text-white text-lg rounded-md hover:bg-[#65bc7b]">Login</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed lg:hidden top-0 w-full h-full z-30 bg-[#252525] transition-all duration-300 ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-white transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-[1rem] left-[1rem] text-2xl cursor-pointer bg-[#65bc7b] text-white p-[3px]"
            onClick={toggleSidebar}
          >
            <IoMdClose />
          </button>

          <ul>
            <li>
              <NavLink
                to="/"
                className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
              >
                About
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/contact"
                className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default Header;
