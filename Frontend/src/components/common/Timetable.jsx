// import React from 'react';

// const Timetable = () => {
//   return (
//     <div className="flex flex-col py-[50px]">
//       <h1 className='text-[35px] font-semibold pb-2'>Your Timetable</h1>
//       <div className='bg-[#eeeeee] rounded-xl relative border-2 border-[#65bc7b]'>
//         <div className="flex flex-row py-2 font-semibold text-center text-[19px]">
//           <div className="w-1/4 px-4">Time</div>
//           <div className="w-1/4 px-4">Subject</div>
//           <div className="w-1/4 px-4">Floor</div>
//           <div className="w-1/4 px-4">Topic</div>
//         </div>
//         <div className="absolute top-1/2 left-0 right-0 mx-auto h-0.5 w-[95%] bg-gray-300"></div>
//         <div className="flex flex-row py-2 text-center text-[18px]">
//           <div className="w-1/4 px-4">9:00 AM</div>
//           <div className="w-1/4 px-4">Mathematics</div>
//           <div className="w-1/4 px-4">2nd</div>
//           <div className="w-1/4 px-4">Algebra</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timetable;




// import React from 'react';
// import img1 from '../../images/ttimg1.png'
// import img2 from '../../images/ttimg2.png'
// import img3 from '../../images/ttimg3.png'
// import img4 from '../../images/ttimg4.png'
// const Timetable = () => {
//   return (
//     <div className="flex flex-col py-[50px]">
//       <h1 className='text-[35px] font-semibold pl-3'>Your Timetable</h1>
//       <div className='rounded-xl px-4 py-[8px] flex gap-2'>
//         {/* Card 1 */}
//         <div className="w-[200px] text-center bg-[#eeeeee] rounded-lg p-6 border-2 border-[#65bc7b]">
//           <img src={img1} alt="Image 1" className="w-[100px] pb-3 h-auto object-cover rounded-lg mx-auto" />
//           <p className="text-[19px] font-bold uppercase">Time</p>
//           <p className="text-[17px] font-semibold">9:00 AM</p>
//         </div>
//         {/* Card 2 */}
//         <div className="w-[200px] text-center bg-[#eeeeee] rounded-lg p-6 border-2 border-[#65bc7b]">
//           <img src={img2} alt="Image 2" className="w-[100px] pb-3 h-auto object-cover rounded-lg mx-auto" />
//           <p className="text-[19px] font-bold uppercase">Subject</p>
//           <p className="text-[17px] font-semibold">Full Stack Web Development</p>
//         </div>
//         {/* Card 3 */}
//         <div className="w-[200px] text-center bg-[#eeeeee] rounded-lg p-6 border-2 border-[#65bc7b]">
//           <img src={img3} alt="Image 3" className="w-[100px] pb-3 h-auto object-cover rounded-lg mx-auto" />
//           <p className="text-[19px] font-bold uppercase">Floor</p>
//           <p className="text-[17px] font-semibold">2nd</p>
//         </div>
//         {/* Card 4 */}
//         <div className="w-[200px] text-center bg-[#eeeeee] rounded-lg p-6 border-2 border-[#65bc7b]">
//           <img src={img4} alt="Image 4" className="w-[100px] pb-3 h-auto object-cover rounded-lg mx-auto" />
//           <p className="text-[19px] font-bold uppercase">Topic</p>
//           <p className="text-[17px] font-semibold">Bootstrap</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timetable;

import React from 'react';
import img1 from '../../images/ttimg1.png';
import img2 from '../../images/ttimg2.png';
import img3 from '../../images/ttimg3.png';
import img4 from '../../images/ttimg4.png';

const Timetable = (props) => {
  return (
    <div className="flex flex-col py-[50px]">
      <h1 className="text-[35px] font-semibold pl-3">{props.TimeTableheading}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2">
        {/* Card 1 */}
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img1} alt="Image 1" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Time</p>
          <p className="text-base font-semibold">9:00 AM</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img2} alt="Image 2" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Subject</p>
          <p className="text-base font-semibold">Full Stack Web Development</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img3} alt="Image 3" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Floor</p>
          <p className="text-base font-semibold">2nd</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img4} alt="Image 4" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Topic</p>
          <p className="text-base font-semibold">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Timetable;

