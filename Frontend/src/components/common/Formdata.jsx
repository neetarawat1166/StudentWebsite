import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Formdata = ({query}) => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    query:"" 
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
    const { firstname, lastname, email,query} = userData;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !query
    ) {
      return toast.error("Please fill all the fields");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email!");
    }

    try {
      const serverres = await axios.post(
        "http://localhost:5000/api/v1/query",
        {
          firstname,
          lastname,
          email,
          query 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("result",serverres);

      if (
        serverres.data.success &&
        serverres.data.message === "Submitted successfully"
      ) {
        toast.success("Submitted Successfully");

        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          query:"" 
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message);
    }
  };


  return (
    <div>
      <form onSubmit={datasave}>
      <div className=" px-6 py-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-base font-bold text-[#003366]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={ValueUpdate}
                value={userData.firstname}
              size="100"
              autoComplete="given-name"
              className="mt-1 block w-full shadow-sm sm:text-sm  rounded-lg  border-[1px] border-[#003366] px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
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
              className="mt-1 block w-full  rounded-lg  shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
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
            className="mt-1 block w-full  rounded-lg  shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            {query}
          </label>
          <textarea
            type="text"
            rows={6}
            id="query"
            name="query"
            onChange={ValueUpdate}
              value={userData.query}
            className="mt-1 block w-full  rounded-lg  shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
          />
        </div>
        
      </div>
      </form>
      <div className="text-center">
          <button
            type="submit"
            onClick={datasave}  
            className="inline-flex text-xl justify-center items-center text-center px-4 py-2 w-[90%] border-transparent font-bold rounded-md text-white bg-[#003366] hover:bg-[#ff9416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366]"
          >
            Submit
          </button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Formdata;
