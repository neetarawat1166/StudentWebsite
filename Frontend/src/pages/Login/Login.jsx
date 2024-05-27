import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img1 from "../../images/wavii2.jpg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { isAuthenticatedContext } from "../../context/userContext.jsx";

const KEY = import.meta.env.VITE_SECRET_KEY;

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );
  //console.log(user)
  // console.log(isAuthenticat)

  const [show, setShow] = useState(false);
  const [secretshow, setSecretshow] = useState(false);
  const [activeButton, setActiveButton] = useState("login");
  const [userData, setUserData] = useState({
    profile: "",
    email: "",
    password: "",
    secretKey: "" // Add secretKey to userData
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
    const { profile, email, password,secretKey } = userData;

    if (!profile || !email || !password || (profile === "Teacher" && !secretKey)) {
      return toast.error("Please fill all the fields.");
    }

    if (profile === "Teacher" && secretKey !== KEY) {
      return toast.error("Invalid secret key");
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
          className="container mx-auto lg:w-[40%] md:w-[60%] w-[80%] py-[30px] rounded-md bg-white bg-gradient-to-br from-blue-100 to-[#003366] border border-[#003366] shadow-xl shadow-black"
          // style={{
          //   backgroundImage: `url(${img1})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <h1 className="text-[#003366] md:text-[30px] text-[20px] font-bold text-center mb-8">
            Login Form
          </h1>
          <div className="grid grid-cols-2 gap-4 mx-auto lg:w-[70%] mb-8 md:w-[70%] w-[90%] sm:w-[80%] rounded-lg border-2 border-solid border-[#003366]">
            <NavLink
              to={"/signup"}
              className={`flex items-center p-1 md:p-2 justify-center md:text-lg text-[16px] font-semibold rounded-lg ${
                activeButton === "signup" ? "bg-[#003366] text-white" : ""
              }`}
              onClick={() => handleButtonClick("signup")}
            >
              <button className="text-[#003366]">Signup</button>
            </NavLink>
            <NavLink
              to={"/login"}
              className={`flex p-1 md:p-2 items-center justify-center md:text-lg text-[16px] font-semibold rounded-lg ${
                activeButton === "login" ? "bg-[#003366] text-white" : ""
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
              className="border-2 border-solid hover:border-[#ff7f16] border-[#ff9416] rounded-lg md:px-6 py-2 px-4"
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
              className="border-2 border-solid hover:border-[#ff7f16] border-[#ff9416] rounded-lg md:px-6 py-2 px-4"
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
                className=" w-full border-2 border-solid hover:border-[#ff7f16] border-[#ff9416] rounded-lg md:px-6 py-2 px-4"
              />
              <div
                className=" absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]"
                onClick={() => setShow((prev) => !prev)}
              >
                {show ? <IoEye /> : <IoEyeOff />}
              </div>
            </div>
            {userData.profile === "Teacher" && (
              <div className="relative">
                <div>
                  <input
                    type={secretshow ? "text" : "password"}
                    value={userData.secretKey}
                    onChange={ValueUpdate}
                    name="secretKey"
                    placeholder="Enter secret key..."
                    className=" w-full border-2 border-solid hover:border-[#ff7f16] border-[#ff9416] rounded-lg md:px-6 py-2 px-4"
                    required
                  />
                  <div
                    className=" absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]"
                    onClick={() => setSecretshow((prev) => !prev)}
                  >
                    {secretshow ? <IoEye /> : <IoEyeOff />}
                  </div>
                </div>
              </div>
            )}
            {/* <p className="text-[#ff9416] font-semibold">Forgot password ?</p> */}
          </form>
          <div className="mx-auto justify-center items-center flex mt-6 ">
            <button
              className="py-2 px-4 md:py-2 md:px-8  text-lg ont-semibold rounded-lg border-2 border-[#003366] bg-[#003366] text-white hover:bg-white hover:text-[#003366] hover:border-[#003366] hover:font-semibold"
              onClick={dataLogin}
            >
              Login
            </button>
          </div>
          <p className="text-white font-semibold mx-auto justify-center items-center flex mt-6 ">
            Not a member?
            <NavLink to={"/signup"}>
              <span className="text-[#ff9416] px-2 font-semibold">Signup now</span>
            </NavLink>
          </p>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
};

export default Login;
