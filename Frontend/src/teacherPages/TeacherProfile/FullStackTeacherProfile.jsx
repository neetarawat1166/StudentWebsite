// import React from 'react';
// import img from '../../images/Akash_sir.png';
// import { FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import '../../components/style/KirtikaStyle/KirtikaCSS.css'

// const TeacherProfile = () => {
//   return (
//     <div className='py-[50px]'>
//       <h1 className='text-[35px] font-semibold pb-2 text-[#003366]'>About Instructor</h1>
//       <div className='bg-[#D9E7FF] p-5 pb-14 gap-7 relative rounded-xl border-2 border-[#d19747] overflow-hidden grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3'>
//         {/* Image Section */}
//         <div className="md:col-span-1 flex justify-center items-center h-full">
//           <img className="TeacherFeatureImg rounded-xl w-full h-full object-cover mx-auto border border-[#d19747]" src={img} alt="Teacher" width="250px" height="auto" />
//         </div>
//         {/* Text Section */}
//         <div className="md:col-span-2 justify-center">
//           <h3 className="text-3xl font-bold pb-2 text-[#d19747]">Ankur Sir</h3>
//           <h4 className='font-[700] text-[20px] text-[#003366]'>Senior DevOps Instructor</h4>
//           <p className='text-[15px]'>He not only possesses in-depth knowledge of cloud platforms and DevOps practices but also has a passion for teaching. He guides our students in harnessing the power of cloud technologies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloribus.</p>
//           <h4 className='font-[700] text-[20px] mt-2 text-[#003366]'>His Experience</h4>
//           <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia explicabo, a ex quaerat sapiente! Lorem ipsum dolor sit amet.</p>
//           <div className='flex gap-4 py-4'>
//             <FaLinkedin className='text-[40px] text-[#d19747]' />
//             <SiGmail className='text-[40px] text-[#d19747]' />
//             <FaSquareXTwitter className='text-[40px] text-[#d19747]' />
//           </div>
//         </div>
//         {/* Social Media Icons Section */}
//         <div className='bg-[#d19847be] px-[20px] absolute bottom-0 left-0 w-full py-4 flex justify-start gap-3 sm:col-span-3 md:col-span-3'>
//           {/* <FaLinkedin className='text-[27px] text-white' />
//           <SiGmail className='text-[27px] text-white' />
//           <FaSquareXTwitter className='text-[27px] text-white' /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherProfile;
import React from 'react'
import img from '../../images/AnkurSir.jpg';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../../components/style/KirtikaStyle/KirtikaCSS.css'

const FullStackTeacherProfile = () => {
  return (
        <div className='py-[50px]'>
          <h1 className='text-[35px] font-semibold pb-2 text-[#003366]'>About Instructor</h1>
          <div className='bg-[#D9E7FF] p-5 pb-14 gap-7 relative rounded-xl border-2 border-[#d19747] overflow-hidden grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3'>
            {/* Image Section */}
            <div className="md:col-span-1 flex justify-center items-center h-full">
              <img className="TeacherFeatureImg rounded-xl w-full h-full object-cover mx-auto border border-[#d19747]" src={img} alt="Teacher" width="250px" height="auto" />
            </div>
            {/* Text Section */}
            <div className="md:col-span-2 justify-center">
              <h3 className="text-3xl font-bold pb-2 text-[#d19747]">Mr. Ankur Singh</h3>
              <h4 className='font-[700] text-[20px] text-[#003366]'>Full Stack Instructor</h4>
              <p className='text-[15px]'>Our web development trainer is proficient and deeply passionate about teaching full-stack web development. With their expertise, they guide students in mastering both front-end and back-end technologies, empowering them to build robust and scalable web applications.</p>
              <h4 className='font-[700] text-[20px] mt-2 text-[#003366]'>His Experience</h4>
              <p className='text-[15px]'>Ankur holds an experience of 4+ years in the field of web development.</p>
              <div className='flex gap-4 py-4'>
                <FaLinkedin className='text-[40px] text-[#d19747]' />
                <SiGmail className='text-[40px] text-[#d19747]' />
                <FaSquareXTwitter className='text-[40px] text-[#d19747]' />
              </div>
            </div>
            {/* Social Media Icons Section */}
            <div className='bg-[#d19847be] px-[20px] absolute bottom-0 left-0 w-full py-4 flex justify-start gap-3 sm:col-span-3 md:col-span-3'>
              {/* <FaLinkedin className='text-[27px] text-white' />
              <SiGmail className='text-[27px] text-white' />
              <FaSquareXTwitter className='text-[27px] text-white' /> */}
            </div>
          </div>
        </div>
      );
}

export default FullStackTeacherProfile