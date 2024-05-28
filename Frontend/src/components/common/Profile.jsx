import React, { useEffect, useState } from 'react';
import img from '../../images/Akash_sir.png';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/getuser", {
          withCredentials: true
        });
        setUserData(res.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='py-[50px] h-full'>
      <div className='grid grid-cols-2 py-2'>
        {/* First Column: Image */}
        <div className='mx-auto p-[1px]'>
          {/* <img src={img} alt="Profile" className="w-[70px] h-auto rounded-full border-2 border-[#65bc7b]" /> */}
          <CgProfile className="w-[70px] h-auto rounded-full border-2 border-[#252525] text-[#d19747]"/>
        </div>
        {/* Second Column: Text */}
        <div className='flex flex-col justify-center'>
          {userData && (
            <>
              <p className='text-[20px]'>Hey, <span className='font-bold text-[#003366]'>{userData.name}</span></p>
            </>
          )}
        </div>
      </div>
      <hr className="w-[90%] mx-auto my-4 border-[#65bc7b]" />
      <div className="px-4">
        {/* Display user information */}
        {userData && (
          <>
            <div className='py-2'>
              <p className="font-semibold text-[#003366] text-[22px]">Course</p>
              <p className='text-[18px] text-[#d19747]'>{userData.course}</p>
            </div>
            <div className='py-2'>
              <p className="font-semibold text-[#003366] text-[22px]">Email</p>
              <p className='text-[18px] text-[#d19747]'>{userData.email}</p>
            </div>
            <div className='py-2'>
              <p className="font-semibold text-[#003366] text-[22px]">Contact</p>
              <p className='text-[18px] text-[#d19747]'>{userData.mobile}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
