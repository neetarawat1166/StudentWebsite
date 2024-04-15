import React from 'react';
import img from '../../images/Akash_sir.png';
const Profile = () => {
  return (
    <div className='py-[50px] bg-[#eeeeee] h-full'>
      <div className='grid grid-cols-2 py-2'>
        {/* First Column: Image */}
        <div className='mx-auto rounded-full border-4 border-[#65bc7b] p-[1px]'>
          <img src={img} alt="Profile" className="w-[70px] h-auto rounded-full border-2 border-[#65bc7b]" />
        </div>
        {/* Second Column: Text */}
        <div className='flex flex-col justify-center'>
          <p className=''>Hey, <span className='font-bold'>Akash</span></p>
          <p className=''>124001</p>
        </div>
      </div>
      <hr className="w-[90%] mx-auto my-4 border-[#65bc7b]" />
      <div className="px-4">
        <div className='py-2'>
          <p className="font-semibold text-[#65bc7b]">Course</p>
          <p>Full Stack Web Development</p>
        </div>
        <div className='py-2'>
          <p className="font-semibold text-[#65bc7b]">DOB</p>
          <p>January 1, 1990</p>
        </div>
        <div className='py-2'>
          <p className="font-semibold text-[#65bc7b]">Contact</p>
          <p>+1234567890</p>
        </div>
        <div className='py-2'>
          <p className="font-semibold text-[#65bc7b]">Email</p>
          <p>example@example.com</p>
        </div>
        <div className='py-2'>
          <p className="font-semibold text-[#65bc7b]">Address</p>
          <p>123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
