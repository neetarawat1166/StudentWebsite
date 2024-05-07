import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img1 from "../../images/wavii2.jpg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { isAuthenticatedContext } from "../../context/userContext.jsx";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );
  // console.log(user)
  // console.log(isAuthenticat)

  const [show, setShow] = useState(false);
  const [activeButton, setActiveButton] = useState("login");
  const [userData, setUserData] = useState({
    profile: "",
    email: "",
    password: "",
  });
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const ValueUpdate = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const dataLogin = async (e) => {
    e.preventDefault();
    const { profile, email, password } = userData;

    if (!profile || !email || !password) {
      return toast.error("Please fill all the fields.");
    }

    try {
      const serverres = await axios.post(
        "http://localhost:5000/api/v1/login",
        {
          profile,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(serverres)

      if (serverres.data.statuscode == 201) {
        setUser(serverres.data.user);
        setisAuthenticat(true);
        // console.log(user)
        // console.log(isAuthenticat)
      }

      if (
        serverres.data.success &&
        serverres.data.message === "Login Successfully"
      ) {
        toast.success("Login Successfully");
        setUserData({
          profile: "",
          email: "",
          password: "",
        });
  
        // Redirect to login page after a slight delay
        setTimeout(() => {
          navigate("/");
        }, 800); // 800 milliseconds delay
      }
      // console.log(serverres.data.success);
      if (
        !error.response.data.success &&
        (error.response.data.message == "Please Enter Valid Details - pass" ||
          error.response.data.message == "Please Enter Valid Details - email"||
          error.response.data.message == "This role not match in this email")

      ) {
        //if password not correcr
        return toast.error("Please provide valid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message);
    }
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
          <h1 className="text-[#4c4a4a] md:text-[30px] text-[20px] font-bold text-center mb-8">
            Login Form
          </h1>
          <div className="grid grid-cols-2 gap-4 mx-auto lg:w-[70%] mb-8 md:w-[70%] w-[90%] sm:w-[80%] rounded-lg border-2 border-solid border-[#b4b1b1]">
            <NavLink
              to={"/signup"}
              className={`flex items-center p-1 md:p-2 justify-center md:text-lg text-[16px] font-semibold rounded-lg ${
                activeButton === "signup" ? "bg-[#65bc7b] text-white" : ""
              }`}
              onClick={() => handleButtonClick("signup")}
            >
              <button className="text-[#4c4a4a]">Signup</button>
            </NavLink>
            <NavLink
              to={"/login"}
              className={`flex p-1 md:p-2 items-center justify-center md:text-lg text-[16px] font-semibold rounded-lg ${
                activeButton === "login" ? "bg-[#65bc7b] text-white" : ""
              }`}
              onClick={() => handleButtonClick("login")}
            >
              <button>Login</button>
            </NavLink>
          </div>

          <form
            action=""
            className="mx-auto grid grid-cols-1 gap-y-4 lg:w-[70%] md:w-[70%] w-[90%] sm:w-[80%] mt-4"
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
              name="email"
              type="email"
              placeholder="Enter your email..."
              value={userData.email}
              onChange={ValueUpdate}
              className="border-2 border-solid border-[#b4b1b1] rounded-lg md:px-6 py-2 px-4"
            />
            <div className="mt-1 relative">
              <input
                name="password"
                type={show ? "text" : "password"}
                onChange={ValueUpdate}
                value={userData.password}
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
            <p className="text-[#2c55daee]">Forgot password ?</p>
          </form>
          <div className="mx-auto justify-center items-center flex mt-6 ">
            <button
              className="py-2 px-4 md:py-2 md:px-8  text-lg ont-semibold rounded-lg bg-[#65bc7b] text-white"
              onClick={dataLogin}
            >
              Login
            </button>
          </div>
          <p className="text-[#4c4a4a] mx-auto justify-center items-center flex mt-6 ">
            Not a member?
            <NavLink to={"/signup"}>
              <span className="text-[#2c55daee] px-2">Signup now</span>
            </NavLink>
          </p>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
};

export default Login;
