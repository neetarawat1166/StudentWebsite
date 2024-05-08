import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import img1 from "../../images/wavii2.jpg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    profile: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    course: "",
  });

  const ValueUpdate = (e) => {
    const { name, value } = e.target;
    if (name === "profile") {
      setUserData({
        ...userData,
        [name]: value,
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };
  console.log(userData);
  const datasave = async (e) => {
    e.preventDefault();
    const { profile, name, email, password,mobile, course } = userData;

    if (!profile || !name || !email || !password || !mobile || !course) {
      return toast.error("Please fill all the fields");
    }

    try {
      const serverres = await axios.post(
        "http://localhost:5000/api/v1/signup",
        {
          profile,
          name,
          email,
          password,
          mobile,
          course,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    //   const serverres = await res.json();
     // console.log(serverres);

      if (serverres.data.success &&
        serverres.data.message === "Signup successfully") {
          
        toast.success("Signup Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 500);

        setUserData({
          profile: "",
          name: "",
          email: "",
          password: "",
          mobile:"",
          course: "",
        });
      } 
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message)
      
      
      
      
      
      // if (error.response) {
      //   const errorMessage = error.response.data.message || "Server Error";
      //   toast.error(errorMessage);
      // } else if (error.request) {
      //   console.error("Request Error:", error.request);
      //   toast.error("Request Error");
      // } else {
      //   console.error("Other Error:", error.message);
      //   toast.error("Other Error");
      // }
    }
    };
    
    const [activeButton, setActiveButton] = useState("signup");
    
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="section bg-[#eeeeee] py-[50px]">
        <div
          className="container mx-auto lg:w-[40%] md:w-[60%] w-[80%] py-[30px] rounded-md bg-white"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="md:text-[30px] text-[20px] font-bold text-center mb-8 text-[#4c4a4a]">
            Signup Form
          </h1>
          <div className="grid grid-cols-2 gap-4 mx-auto lg:w-[70%] mb-8 md:w-[70%] w-[90%] sm:w-[80%] rounded-lg border-2 border-solid border-[#b4b1b1]">
            <NavLink
              to={"/signup"}
              className={`flex items-center p-1 md:p-2 justify-center md:text-lg text-[16px] font-semibold rounded-lg ${
                activeButton === "signup" ? "bg-[#65bc7b] text-white" : ""
              }`}
              onClick={() => handleButtonClick("signup")}
            >
              <button>Signup</button>
            </NavLink>
            <NavLink
              to={"/login"}
              className={`flex p-1 md:p-2 items-center justify-center md:text-lg text-[16px] font-semibold rounded-lg ${
                activeButton === "login" ? "bg-[#65bc7b] text-white" : ""
              }`}
              onClick={() => handleButtonClick("login")}
            >
              <button className="text-[#4c4a4a]">Login</button>
            </NavLink>
          </div>

          <form
            className="mx-auto grid grid-cols-1 gap-y-4 lg:w-[70%] md:w-[70%] w-[90%] sm:w-[80%] mt-4"
            onSubmit={datasave}
          >
            <select
              id="profile"
              onChange={ValueUpdate}
              value={userData.profile}
              name="profile"
              className="border-2 border-solid hover:border-[#65bc7b] border-[#b4b1b1] rounded-lg md:px-6 py-2 px-4"
            >
              <option value="" disabled>
                Choose your profile
              </option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
            <input
              type="text"
              value={userData.name}
              onChange={ValueUpdate}
              name="name"
              placeholder="Enter your name..."
              className="border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4"
            />
            <input
              type="email"
              value={userData.email}
              onChange={ValueUpdate}
              name="email"
              placeholder="Enter your email..."
              className="border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4"
            />
            <div className="mt-1 relative">
              <input
                value={userData.password}
                onChange={ValueUpdate}
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your Password..."
                autoComplete="current-password"
                required
                className=" w-full border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4"
              />
              <div
                className=" absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]"
                onClick={() => setShow((prev) => !prev)}
              >
                {show ? <IoEye /> : <IoEyeOff />}
              </div>
            </div>
            <input
              type="number"
              value={userData.mobile}
              onChange={ValueUpdate}
              name="mobile"
              placeholder="Enter your Contact number..."
              className="border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4"
            />
            <select
              id="course"
              onChange={ValueUpdate}
              value={userData.course}
              name="course"
              className="border-2 border-solid hover:border-[#65bc7b] border-[#b4b1b1] rounded-lg md:px-6 py-2 px-4"
            >
              <option value="" disabled>
                Choose your Course
              </option>
              <option value="Full Stack Web Development">
                Full Stack Web Development
              </option>
              <option value="Data Science & Machine Learning with AI">
                Data Science & Machine Learning with AI
              </option>
              <option value="Cloud Computing & DevOps">
                Cloud Computing & DevOps
              </option>
              <option value="Embedded Systems & Robotics with IOT">
                Embedded Systems & Robotics with IOT
              </option>
            </select>
          </form>
          <div className="mx-auto justify-center items-center flex mt-6 ">
            <button
              className="py-2 px-4 md:py-2 md:px-8 text-lg ont-semibold rounded-lg bg-[#65bc7b] text-white"
              type="submit"
              onClick={datasave}
            >
              Signup
            </button>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
};

export default Signup;
