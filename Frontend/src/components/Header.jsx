import React, { useState, useContext, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/Logo.png";
import UpflairsLogo from "../images/UpflairsLogo.png";
import Profile from "../components/common/Profile";
import { isAuthenticatedContext } from "../context/userContext.jsx";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );

  const sidebarRef = useRef(null);
  const profileRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
      console.log(res);
      setUser("");
      setisAuthenticat(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      sidebarOpen
    ) {
      setSidebarOpen(false);
    }
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target) &&
      profileOpen
    ) {
      setProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, profileOpen]);

  return (
    <nav className="bg-[#003366] px-3 py-3 flex justify-between relative">
      <div className="flex items-center gap-[3rem]">
        <IoMenu
          className="text-3xl text-white cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
        <div className="text-black">
          <img
            src={UpflairsLogo}
            className="md:w-[180px] w-[110px] pr-3"
            alt="logo"
          />
        </div>
        <div className="hidden lg:block relative">
          <ul className="flex gap-[2rem] text-white">
            <li className="text-lg relative py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#ff9416]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            {isAuthenticat && (
              <>
                <li className="text-lg relative py-4">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "border-b-[3px] border-[#ff9416]" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="text-lg relative py-4">
                  <NavLink
                    to="/assignment"
                    className={({ isActive }) =>
                      isActive ? "border-b-[3px] border-[#ff9416]" : ""
                    }
                  >
                    Assignment
                  </NavLink>
                </li>
                <li className="text-lg relative py-4">
                  <NavLink
                    to="/resources"
                    className={({ isActive }) =>
                      isActive ? "border-b-[3px] border-[#ff9416]" : ""
                    }
                  >
                    Resources
                  </NavLink>
                </li>
                <li className="text-lg relative py-4">
                  {user &&
                    user.course === "Embedded Systems & Robotics with IOT" && (
                      <NavLink
                        to="/embeddedsystemssyllabus"
                        className={({ isActive }) =>
                          isActive ? "border-b-[3px] border-[#ff9416]" : ""
                        }
                      >
                        Syllabus
                      </NavLink>
                    )}
                  {user && user.course === "Cloud Computing & DevOps" && (
                    <NavLink
                      to="/cloudcomputingsyllabus"
                      className={({ isActive }) =>
                        isActive ? "border-b-[3px] border-[#ff9416]" : ""
                      }
                    >
                      Syllabus
                    </NavLink>
                  )}
                  {user &&
                    user.course ===
                      "Data Science & Machine Learning with AI" && (
                      <NavLink
                        to="/datasciencesyllabus"
                        className={({ isActive }) =>
                          isActive ? "border-b-[3px] border-[#ff9416]" : ""
                        }
                      >
                        Syllabus
                      </NavLink>
                    )}
                  {user && user.course === "Full Stack Web Development" && (
                    <NavLink
                      to="/fullstacksyllabus"
                      className={({ isActive }) =>
                        isActive ? "border-b-[3px] border-[#ff9416]" : ""
                      }
                    >
                      Syllabus
                    </NavLink>
                  )}
                </li>
                {user && user.profile === "Teacher" ? (
                  <li className="text-lg relative py-4">
                    <NavLink
                      to="/studentlist"
                      className={({ isActive }) =>
                        isActive ? "border-b-[3px] border-[#ff9416]" : ""
                      }
                    >
                      Student-List
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
              </>
            )}
            <li className="text-lg relative py-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#ff9416]" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#ff9416]" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/query"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#ff9416]" : ""
                }
              >
                Query
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#ff9416]" : ""
                }
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <div className="overflow-hidden">
          <ul className="flex md:gap-3 gap-2">
            <li>
              <MdManageAccounts
                className="text-3xl text-white cursor-pointer lg:hidden"
                onClick={toggleProfile}
              />
            </li>
            {isAuthenticat ? (
              <li>
                <button
                  className="bg-[#ff9416] py-1 px-2 text-white md:text-lg text-[16px] rounded-lg border hover:bg-white hover:text-[#ff9416] hover:border-[#ff9416] hover:font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to={"/signup"}>
                    <button className="bg-[#ff9416] py-1 px-2 text-white md:text-lg text-[16px] rounded-lg border hover:bg-white hover:text-[#ff9416] hover:border-[#ff9416] hover:font-semibold">
                      Signup
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>
                    <button className="bg-[#ff9416] py-1 px-2 text-white md:text-lg text-[16px] rounded-lg border hover:bg-white hover:text-[#ff9416] hover:border-[#ff9416] hover:font-semibold">
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
        className={`fixed lg:hidden top-0 w-full h-full z-30 bg-[#25252500] transition-all duration-300 ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          ref={sidebarRef}
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-[#003366] transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-[1rem] left-[1rem] text-2xl cursor-pointer bg-[#ff9416] text-white p-[3px]"
            onClick={toggleSidebar}
          >
            <IoMdClose />
          </button>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
              >
                Home
              </NavLink>
            </li>
            {isAuthenticat && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                        : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/assignment"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                        : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                    }
                  >
                    Assignment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resources"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                        : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                    }
                  >
                    Resources
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/syllabus"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                        : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                    }
                  >
                    Syllabus
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/query"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
              >
                Any Query?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Profile Sidebar */}
      <div
        className={`fixed lg:hidden top-0 w-full h-full z-30 bg-[#25252503] transition-all duration-300 ${
          profileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          ref={profileRef}
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
