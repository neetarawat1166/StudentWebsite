import React, { useState, useEffect, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/Logo.png";
import Profile from "../components/common/Profile";
import { isAuthenticatedContext } from "../context/userContext.jsx";
import axios from "axios";
// import { useAuth } from "../pages/Signup/AuthContext";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const {isAuthenticat, setUser, user, setisAuthenticat} = useContext(isAuthenticatedContext)

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/logout", {
        headers: {
          "Content-Type": "application/json",
        },
          withCredentials: true,
        });
        console.log(res)
      setUser("");
      setisAuthenticat(false);
      navigate("/login");
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <nav className="bg-[#eeeeee] px-3 py-3 flex justify-between relative">
      <div className="flex items-center gap-[3rem]">
        <IoMenu
          className="text-3xl text-black cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
        <div className="text-black">
          <img src={logo} className="md:w-[100px] w-[90px] pr-3" alt="logo" />
        </div>
        <div className="hidden lg:block relative">
          <ul className="flex gap-[2rem] text-black">
            <li className="text-lg relative py-4">
              <NavLink to="/">Home</NavLink>
            </li>
            {isAuthenticat && (
              <>
                <li className="text-lg relative py-4">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li> 
                {/* <li className="text-lg relative py-4">
                  <NavLink to="/dashboard-1">Dashboard-1</NavLink>
                </li> */}
                <li className="text-lg relative py-4">
                  <NavLink to="/assignment">Assignment</NavLink>
                </li>
                {/* <li className="text-lg relative py-4">
                  <NavLink to="/assignment-1">Assignment-1</NavLink>
                </li> */}
                <li className="text-lg relative py-4">
                  <NavLink to="/resources">Resources</NavLink>
                </li>
                {/* <li className="text-lg relative py-4">
                  <NavLink to="/resources-1">Resources-1</NavLink>
                </li> */} 
                <li className="text-lg relative py-4">
                  {user && user.course === 'Embedded Systems & Robotics with IOT' && <NavLink to="/embeddedsystemssyllabus">Syllabus</NavLink>}
                  {user && user.course === 'Cloud Computing & DevOps' && <NavLink to="/cloudcomputingsyllabus">Syllabus</NavLink>}
                  {user && user.course === 'Data Science & Machine Learning with AI' && <NavLink to="/datasciencesyllabus">Syllabus</NavLink>}
                  {user && user.course === 'Full Stack Web Development' && <NavLink to="/fullstacksyllabus">Syllabus</NavLink>}
                </li>
                {
                  user && user.profile === "Teacher" ? (<li className="text-lg relative py-4">
                  <NavLink to="/studentlist">Student-List</NavLink>
                </li>) : ""
                }
                {/* <li className="text-lg relative py-4">
                  <NavLink to="/syllabus-1">Syllabus-1</NavLink>
                </li> */}
              </>
            )}
            {/* <li className="text-lg relative py-4">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink to="/query">Any Query?</NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink to="/feedback">Feedback</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <div className="overflow-hidden">
          <ul className="flex md:gap-3 gap-2">
            <li>
              <MdManageAccounts
                className="text-3xl text-black cursor-pointer lg:hidden"
                onClick={toggleProfile}
              />
            </li>
            {isAuthenticat ? (
              // Render logout button if user is authenticated
              <li>
                <button
                  className="bg-[#65bc7b] py-1 px-2 text-white md:text-lg text-[16px] rounded-lg hover:bg-[#252525]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              // Render signup and login buttons if user is not authenticated
              <>
                <li>
                  <NavLink to={"/signup"}>
                    <button className="bg-[#65bc7b] py-1 px-2 text-white md:text-lg text-[16px] rounded-lg hover:bg-[#252525]">
                      Signup
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>
                    <button className="bg-[#252525] py-1 px-2 text-white md:text-lg text-[16px] rounded-lg hover:bg-[#65bc7b]">
                      Login
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
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
            {isAuthenticat && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/assignment"
                    className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
                  >
                    Assignment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resources"
                    className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
                  >
                    Resources
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/syllabus"
                    className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
                  >
                    Syllabus
                  </NavLink>
                </li>
              </>
            )}
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
            <li>
              <NavLink
                to="/query"
                className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
              >
                Any Query?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className="block text-white bg-[#65bc7b] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525]"
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Profile Sidebar */}
      <div
        className={`fixed lg:hidden top-0 w-full h-full z-30 bg-[#252525] transition-all duration-300 ${
          profileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-white transition-transform duration-300 transform ${
            profileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-[1rem] left-[1rem] text-2xl cursor-pointer bg-[#65bc7b] text-white p-[3px]"
            onClick={toggleProfile}
          >
            <IoMdClose />
          </button>
          <Profile /> {/* Render Profile component as sidebar */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
