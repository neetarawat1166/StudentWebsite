import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    course: "",
    message: "", 
  });

  const ValueUpdate = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,    
    });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const datasave = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email,mobile, course,message } = userData;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !mobile ||
      !course ||
      !message
    ) {
      return toast.error("Please fill all the fields");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email!");
    }

    try {
      const serverres = await axios.post(
        "http://localhost:5000/api/v1/contact",
        {
          firstname,
          lastname,
          email,
          mobile,
          course,
          message, 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      //console.log("result",serverres);

      if (
        serverres.data.success &&
        serverres.data.message === "Submitted successfully"
      ) {
        toast.success("Submitted Successfully");

        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          course: "",
          message: "", 
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div>
      <form onSubmit={datasave}>
        <div className=" px-6 py-4 rounded-lg ">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-base font-bold text-[#003366] FormLabel"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                size="100"
                onChange={ValueUpdate}
                value={userData.firstname}
                autoComplete="given-name"
                className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#003366] px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-base font-bold text-[#003366] FormLabel"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={ValueUpdate}
                value={userData.lastname}
                autoComplete="family-name"
                className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#003366] px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base font-bold text-[#003366] FormLabel"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={ValueUpdate}
              value={userData.email}
              autoComplete="email"
              className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#003366] px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-base font-bold text-[#003366] FormLabel"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              onChange={ValueUpdate}
              value={userData.mobile}
              name="mobile"
              autoComplete="tel"
              className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#003366] px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-base font-bold text-[#003366] FormLabel"
            >
              Course and Degree
            </label>
            <select
              id="course"
              name="course"
              onChange={ValueUpdate}
              value={userData.course}
              autoComplete="course"
              className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#003366] px-3 py-2"
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="B.tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MCA">MCA</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="yearOfStudy"
              className="block text-base font-bold text-[#003366] FormLabel"
            >
              Type your Message here
            </label>
            <textarea
              type="text"
              onChange={ValueUpdate}
              value={userData.message}
              id="message"
              name="message"
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-lg border-[1px] border-[#003366] px-3 py-2"
            />
          </div>
        </div>
        </form>
        <div className="text-center">
            <button
              type="submit"
              onClick={datasave}
              className="inline-flex text-xl justify-center items-center text-center px-4 py-2 w-[90%] border-transparent font-bold rounded-md text-white bg-[#003366] hover:bg-[#ff9416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default ContactForm;
