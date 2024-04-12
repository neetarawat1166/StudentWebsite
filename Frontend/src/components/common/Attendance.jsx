import React from "react";
import CircleProgress from "../common/AttendanceCard";
import { IoLogoWebComponent } from "react-icons/io5";

const Attendance = ({ attended, total }) => {
  // Calculate the percentage
  const percentage = ((attended / total) * 100).toFixed(2);

  return (
    <>
      <div className="section">
        <h1 className="text-[35px] text-[#252525] font-semibold text-center py-5">
          Attendance
        </h1>
        <div className="container border-2 border-[#65bc7b] mx-auto bg-[#eeeeee] py-[10px] text-center text-[#252525] w-full rounded-lg shadow-md relative">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-[18px] sm:text-[30px] md:text-[23px] lg:text-[30px] font-semibold text-[#65bc7b]">
              Full Stack Web Development
            </h1>
            {/* <IoLogoWebComponent className="text-[18px] sm:text-[30px] md:text-[23px] lg:text-[30px] font-semibold" /> */}
          </div>
          <div className="flex justify-center items-center gap-4 text-[18px] sm:text-[30px] md:text-[23px] lg:text-[25px]">
            <h2 className="py-4">Class attended :</h2>
            <div className="flex justify-center items-center">
              <h2>{attended}</h2>
              <h2>/</h2>
              <h2>{total}</h2>
            </div>
          </div>

          {/* Display the percentage below the section */}
          <div className="text-center mt-5">
            <p className="text-[18px] sm:text-[30px] md:text-[23px] lg:text-[25px] text-gray-700">Attendance Percentage</p>
            <div className="w-[100px] h-[100px] mx-auto relative mt-2">
              {/* Replace the CircleProgress component with the inline SVG */}
              <CircleProgress percentage={percentage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
