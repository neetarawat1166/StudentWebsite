import React from "react";

const ContactForm = () => {
  return (
    <>
      <div>
        <div className=" px-6 py-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-base font-bold text-[#65bc7b] FormLabel"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                size="100"
                autoComplete="given-name"
                className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#65bc7b] px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-base font-bold text-[#65bc7b] FormLabel"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#65bc7b] px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base font-bold text-[#65bc7b] FormLabel"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#65bc7b] px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-base font-bold text-[#65bc7b] FormLabel"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              autoComplete="tel"
              className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#65bc7b] px-3 py-2"
            />
          </div>
          {/* <div className="mb-4">
          <label htmlFor="university" className="block text-base font-bold text-[#65bc7b] FormLabel">
            College or University Name
          </label>
          <input
            type="text"
            id="university"
            name="university"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#65bc7b] px-3 py-2"
          />
        </div> */}
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-base font-bold text-[#65bc7b] FormLabel"
            >
              Course and Degree
            </label>
            <select
              id="course"
              name="course"
              autoComplete="course"
              className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] rounded-lg border-[#65bc7b] px-3 py-2"
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
          {/* <div className="mb-4">
          <label htmlFor="yearOfStudy" className="block text-base font-bold text-[#65bc7b] FormLabel">
            Year of Study
          </label>
          <input
            type="text"
            id="yearOfStudy"
            name="yearOfStudy"
            className="mt-1 block w-full shadow-sm sm:text-sm rounded-lg border-[1px] border-[#65bc7b] px-3 py-2"
          />
        </div> */}
          <div className="mb-4">
            <label
              htmlFor="yearOfStudy"
              className="block text-base font-bold text-[#65bc7b] FormLabel"
            >
              Type your Message here
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-lg border-[1px] border-[#65bc7b] px-3 py-2"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex text-xl justify-center rounded-lg items-center text-center px-4 py-2 w-full border-transparent font-bold rounded-md text-white bg-[#65bc7b] hover:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
