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
import Modal from "./common/Modal.jsx";
import { IoIosArrowDown } from "react-icons/io";

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

  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const [activeTab, setActiveTab] = useState('');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  console.log(activeTab)

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
                  isActive && activeTab === 'home'
                    ? "border-b-[3px] border-[#ff9416]"
                    : ""
                }
                onClick={() => handleTabClick('home')}
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
                      isActive && activeTab === 'dashboard'
                        ? "border-b-[3px] border-[#ff9416]"
                        : ""
                    }
                    onClick={() => handleTabClick('dashboard')}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <Modal>
                <Modal.Open opens="courseMaterial">
                    <li className="text-lg relative py-4">
                      <div
                        onClick={() => handleTabClick('courseMaterial')}
                        style={{ display: "flex", alignItems: "center", gap: "4px" }}
                        className={ 
                          activeTab === 'courseMaterial'
                            ? "border-b-[3px] border-[#ff9416]"
                            : ""
                        }
                      >
                        Course Material <IoIosArrowDown />
                      </div>
                    </li>
                  </Modal.Open>
                  <Modal.Window name="courseMaterial">
                    <div className="absolute bg-[#D9E7FF] w-full text-center shadow-md p-4 rounded">
                      <li className="text-lg hover:bg-[#ddb44c8c] hover:rounded-md py-2 text-[#003366]">
                        <NavLink to="/assignment" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
                          Assignment
                        </NavLink>
                      </li>
                      <li className="text-lg py-2 hover:bg-[#ddb44c8c] hover:rounded-md text-[#003366]">
                        <NavLink to="/resources" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
                          Resources
                        </NavLink>
                      </li>
                      <li className="text-lg relative py-2 hover:bg-[#ddb44c8c] hover:rounded-md text-[#003366]">
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
                    </div>

                  </Modal.Window>
                </Modal>
                {user && user.profile === "Teacher" ? (
                  <li className="text-lg relative py-4">
                    <NavLink
                      to="/studentlist"
                      className={({ isActive }) =>
                        isActive && activeTab === 'studentlist'
                          ? "border-b-[3px] border-[#ff9416]"
                          : ""
                      }
                      onClick={() => handleTabClick('studentlist')}
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
                  isActive && activeTab === 'about'
                    ? "border-b-[3px] border-[#ff9416]"
                    : ""
                }
                onClick={() => handleTabClick('about')}
              >
                About
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive && activeTab === 'contact'
                    ? "border-b-[3px] border-[#ff9416]"
                    : ""
                }
                onClick={() => handleTabClick('contact')}
              >
                Contact
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/query"
                className={({ isActive }) =>
                  isActive && activeTab === 'query'
                    ? "border-b-[3px] border-[#ff9416]"
                    : ""
                }
                onClick={() => handleTabClick('query')}
              >
                Query
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
        className={`fixed lg:hidden top-0 w-full h-full z-30 bg-[#25252500] transition-all duration-300 ${sidebarOpen ? "visible" : "invisible"
          }`}
      >
        <div
          ref={sidebarRef}
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-[#003366] transition-transform duration-300 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                  isActive && activeTab === 'home'
                    ? "block text-[#ff9416] bg-white mb-4 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-4 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
                onClick={() => handleTabClick('home')}
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
                      isActive && activeTab === 'dashboard'
                        ? "block text-[#ff9416] bg-white py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                        : "block text-white bg-[#ff9416] py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                    }
                    onClick={() => handleTabClick('dashboard')}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <Modal>
                <Modal.Open opens="courseMaterial">
                    <li className="text-lg relative py-4">
                      <div
                        onClick={() => handleTabClick('courseMaterial')}
                        style={{ display: "flex", alignItems: "center", gap: "4px" }}
                        className={ 
                          activeTab === 'courseMaterial'
                            ? "block text-[#ff9416] bg-white py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                            : "block text-white bg-[#ff9416] py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                        }
                      >
                        Course Material <IoIosArrowDown />
                      </div>
                    </li>
                  </Modal.Open>
                  <Modal.Window name="courseMaterial">
                    <div className="absolute bg-[#D9E7FF] w-full text-center shadow-md p-4 rounded">
                      <li className="text-lg py-2 text-[#003366]">
                        <NavLink to="/assignment" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
                          Assignment
                        </NavLink>
                      </li>
                      <li className="text-lg py-2 text-[#003366]">
                        <NavLink to="/resources" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
                          Resources
                        </NavLink>
                      </li>
                      <li className="text-lg py-2 text-[#003366]">
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
                    </div>
                  </Modal.Window>
                </Modal>
                {/* <li>
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
                </li> */}
              </>
            )}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive && activeTab === 'about'
                    ? "block text-[#ff9416] bg-white mb-4 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-4 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
                onClick={() => handleTabClick('about')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive && activeTab === 'contact'
                    ? "block text-[#ff9416] bg-white mb-4 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-4 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
                onClick={() => handleTabClick('contact')}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/query"
                className={({ isActive }) =>
                  isActive && activeTab === 'query'
                    ? "block text-[#ff9416] bg-white mb-3 py-2 px-4 w-full rounded-md font-bold border border-[#ff9416]"
                    : "block text-white bg-[#ff9416] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#252525] border border-white"
                }
                onClick={() => handleTabClick('query')}
              >
                Any Query?
              </NavLink>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </div>
      {/* Profile Sidebar */}
      <div
        className={`fixed lg:hidden top-0 w-full h-full z-30 bg-[#25252503] transition-all duration-300 ${profileOpen ? "visible" : "invisible"
          }`}
      >
        <div
          ref={profileRef}
          className={`relative w-[250px] h-full px-[1rem] py-[6rem] bg-white transition-transform duration-300 transform ${profileOpen ? "translate-x-0" : "-translate-x-full"
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

// // import { IoMenu } from "react-icons/io5";
// // import { MdManageAccounts } from "react-icons/md";
// // import { IoMdClose } from "react-icons/io";
// import React, { useState, useContext, useRef, useEffect } from "react";
// import {IoIosArrowDown } from "react-icons/io";
// import { IoMenu } from "react-icons/io5";
// import { MdManageAccounts } from "react-icons/md";
// import { IoMdClose } from "react-icons/io";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import logo from "../images/Logo.png";
// import UpflairsLogo from "../images/UpflairsLogo.png";
// import Profile from "../components/common/Profile";
// import { isAuthenticatedContext } from "../context/userContext.jsx";
// import Modal from "./common/Modal.jsx";

// const Header = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(isAuthenticatedContext);
//   const sidebarRef = useRef(null);
//   const profileRef = useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:5000/api/v1/logout", {
//         headers: { "Content-Type": "application/json" },
//         withCredentials: true,
//       });
//       setUser("");
//       setisAuthenticat(false);
//       navigate("/login");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target) && sidebarOpen) {
//       setSidebarOpen(false);
//     }
//     if (profileRef.current && !profileRef.current.contains(event.target) && profileOpen) {
//       setProfileOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [sidebarOpen, profileOpen]);

//   return (
//     <nav className="bg-[#003366] px-3 py-3 flex justify-between relative">
//       <div className="flex items-center gap-[3rem]">
//         <IoMenu className="text-3xl text-white cursor-pointer lg:hidden" onClick={toggleSidebar} />
//         <div className="text-black">
//           <img src={UpflairsLogo} className="md:w-[180px] w-[110px] pr-3" alt="logo" />
//         </div>
//         <div className="hidden lg:block relative">
//           <ul className="flex gap-[2rem] text-white">
//             <li className="text-lg relative py-4">
//               <NavLink to="/" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                 Home
//               </NavLink>
//             </li>
//             {isAuthenticat && (
//               <>
//                 <li className="text-lg relative py-4">
//                   <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                     Dashboard
//                   </NavLink>
//                 </li>
//                 <Modal>
//                   <Modal.Open opens="courseMaterial">
//                     <li className="text-lg relative py-4">
//                       <NavLink style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                         Course Material <IoIosArrowDown />
//                       </NavLink>
//                     </li>
//                   </Modal.Open>
//                   <Modal.Window name="courseMaterial">
//                     <div className="absolute bg-[#D9E7FF] w-full text-center shadow-md p-4 rounded">
//                       <li className="text-lg py-2 text-[#003366]">
//                         <NavLink to="/assignment" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                           Assignment
//                         </NavLink>
//                       </li>
//                       <li className="text-lg py-2 text-[#003366]">
//                         <NavLink to="/resources" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                           Resources
//                         </NavLink>
//                       </li>
//                     </div>
//                   </Modal.Window>
//                 </Modal>
//                 <li className="text-lg relative py-4">
//                   {user?.course === "Embedded Systems & Robotics with IOT" && (
//                     <NavLink to="/embeddedsystemssyllabus" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                       Syllabus
//                     </NavLink>
//                   )}
//                   {user?.course === "Cloud Computing & DevOps" && (
//                     <NavLink to="/cloudcomputingsyllabus" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                       Syllabus
//                     </NavLink>
//                   )}
//                   {user?.course === "Data Science & Machine Learning with AI" && (
//                     <NavLink to="/datasciencesyllabus" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                       Syllabus
//                     </NavLink>
//                   )}
//                   {user?.course === "Full Stack Web Development" && (
//                     <NavLink to="/fullstacksyllabus" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                       Syllabus
//                     </NavLink>
//                   )}
//                 </li>
//                 {user?.profile === "Teacher" && (
//                   <li className="text-lg relative py-4">
//                     <NavLink to="/studentlist" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                       Student List
//                     </NavLink>
//                   </li>
//                 )}
//               </>
//             )}
//             <li className="text-lg relative py-4">
//               <NavLink to="/about" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                 About
//               </NavLink>
//             </li>
//             <li className="text-lg relative py-4">
//               <NavLink to="/contact" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                 Contact
//               </NavLink>
//             </li>
//             <li className="text-lg relative py-4">
//               <NavLink to="/query" className={({ isActive }) => (isActive ? "border-b-[3px] border-[#ff9416]" : "")}>
//                 Query
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex items-center gap-3">
//         <div className="text-white">
//           <img src={logo} className="lg:w-[80px] w-[70px] rounded-[50%]" alt="logo" />
//         </div>
//         <div className="relative">
//           <div
//             className="text-white cursor-pointer flex items-center gap-2"
//             onClick={toggleProfile}
//             ref={profileRef}
//           >
//             <MdManageAccounts className="text-2xl" />
//             <span className="hidden md:block">{user?.name}</span>
//           </div>
//           {profileOpen && (
//             <div className="absolute top-[100%] right-0 bg-white text-black shadow-lg p-4 rounded">
//               <Profile />
//               <button className="mt-4 w-full bg-[#ff9416] text-white py-2 rounded" onClick={handleLogout}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {sidebarOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
//           ref={sidebarRef}
//         >
//           <div className="bg-white w-[80%] h-full p-4">
//             <IoMdClose className="text-3xl cursor-pointer" onClick={toggleSidebar} />
//             <ul className="mt-6">
//               <li className="py-2">
//                 <NavLink to="/" className="text-lg" onClick={toggleSidebar}>
//                   Home
//                 </NavLink>
//               </li>
//               {isAuthenticat && (
//                 <>
//                   <li className="py-2">
//                     <NavLink to="/dashboard" className="text-lg" onClick={toggleSidebar}>
//                       Dashboard
//                     </NavLink>
//                   </li>
//                   <li className="py-2">
//                     <NavLink to="/assignment" className="text-lg" onClick={toggleSidebar}>
//                       Assignment
//                     </NavLink>
//                   </li>
//                   <li className="py-2">
//                     <NavLink to="/resources" className="text-lg" onClick={toggleSidebar}>
//                       Resources
//                     </NavLink>
//                   </li>
//                   {user?.course === "Embedded Systems & Robotics with IOT" && (
//                     <li className="py-2">
//                       <NavLink to="/embeddedsystemssyllabus" className="text-lg" onClick={toggleSidebar}>
//                         Syllabus
//                       </NavLink>
//                     </li>
//                   )}
//                   {user?.course === "Cloud Computing & DevOps" && (
//                     <li className="py-2">
//                       <NavLink to="/cloudcomputingsyllabus" className="text-lg" onClick={toggleSidebar}>
//                         Syllabus
//                       </NavLink>
//                     </li>
//                   )}
//                   {user?.course === "Data Science & Machine Learning with AI" && (
//                     <li className="py-2">
//                       <NavLink to="/datasciencesyllabus" className="text-lg" onClick={toggleSidebar}>
//                         Syllabus
//                       </NavLink>
//                     </li>
//                   )}
//                   {user?.course === "Full Stack Web Development" && (
//                     <li className="py-2">
//                       <NavLink to="/fullstacksyllabus" className="text-lg" onClick={toggleSidebar}>
//                         Syllabus
//                       </NavLink>
//                     </li>
//                   )}
//                   {user?.profile === "Teacher" && (
//                     <li className="py-2">
//                       <NavLink to="/studentlist" className="text-lg" onClick={toggleSidebar}>
//                         Student List
//                       </NavLink>
//                     </li>
//                   )}
//                 </>
//               )}
//               <li className="py-2">
//                 <NavLink to="/about" className="text-lg" onClick={toggleSidebar}>
//                   About
//                 </NavLink>
//               </li>
//               <li className="py-2">
//                 <NavLink to="/contact" className="text-lg" onClick={toggleSidebar}>
//                   Contact
//                 </NavLink>
//               </li>
//               <li className="py-2">
//                 <NavLink to="/query" className="text-lg" onClick={toggleSidebar}>
//                   Query
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

