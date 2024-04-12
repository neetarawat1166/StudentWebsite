import React from 'react';

const Timetable = () => {
  return (
    <div className="flex flex-col py-[50px]">
      <h1 className='text-[35px] font-semibold pb-2'>Your Timetable</h1>
      <div className='bg-[#eeeeee] rounded-xl relative'>
        <div className="flex flex-row py-2 font-semibold text-center text-[20px]">
          <div className="w-1/4 px-4">Time</div>
          <div className="w-1/4 px-4">Subject</div>
          <div className="w-1/4 px-4">Floor</div>
          <div className="w-1/4 px-4">Topic</div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 mx-auto h-0.5 w-[95%] bg-gray-300"></div>
        <div className="flex flex-row py-2 text-center text-[18px]">
          <div className="w-1/4 px-4">9:00 AM</div>
          <div className="w-1/4 px-4">Mathematics</div>
          <div className="w-1/4 px-4">2nd</div>
          <div className="w-1/4 px-4">Algebra</div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
