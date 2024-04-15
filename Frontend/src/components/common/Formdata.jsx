import React from "react";

const Formdata = ({query}) => {
  return (
    <div>
      <div className=" px-6 py-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-base font-bold text-[#65bc7b]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              size="100"
              autoComplete="given-name"
              className="mt-1 block w-full shadow-sm sm:text-sm  rounded-lg  border-[1px] border-[#65bc7b] px-3 py-2"
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
              className="mt-1 block w-full  rounded-lg  shadow-sm sm:text-sm border-[1px] border-[#65bc7b] px-3 py-2"
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
            className="mt-1 block w-full  rounded-lg  shadow-sm sm:text-sm border-[1px] border-[#65bc7b] px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-base font-bold text-[#65bc7b] FormLabel"
          >
            {query}
          </label>
          <textarea
            type="text"
            rows={6}
            id="query"
            name="query"
            className="mt-1 block w-full  rounded-lg  shadow-sm sm:text-sm border-[1px] border-[#65bc7b] px-3 py-2"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex text-xl justify-center items-center text-center px-4 py-2 w-full border-transparent font-bold rounded-md text-white bg-[#65bc7b] hover:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#65bc7b]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formdata;
