import React, { useState, useEffect, useContext, useRef } from 'react';
import img1 from '../../images/ttimg1.png';
import img2 from '../../images/ttimg2.png';
import img3 from '../../images/ttimg3.png';
import img4 from '../../images/ttimg4.png';
import BgImage from '../../images/wavii2.jpg';
import { CiEdit } from "react-icons/ci";
import { isAuthenticatedContext } from '../../context/userContext';
import axios from 'axios';

const Timetable = (props) => {
  const { isAuthenticat, setUser, user, setisAuthenticat, setUpdateData, updateData } = useContext(
    isAuthenticatedContext
  );

  const [editedTopic, setEditedTopic] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    if (updateData && updateData.length > 0) {
      setEditedTopic(updateData[0].topic); // Set the initial topic for editing
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTopic = async () => {
    try {
      const updatedData = { ...updateData[0], topic: editedTopic };
      const response = await axios.put('http://localhost:5000/api/v1/updateData', updatedData, {
        withCredentials: true,
      });
      setUpdateData(updatedData);
      setIsModalOpen(false);
      setEditedTopic(updatedData.topic); // Update the editedTopic state with the new topic
      console.log("Data updated successfully", response);
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (
    <div className="flex flex-col py-[50px]">
      <h1 className="text-[35px] font-semibold pl-3 text-[#003366]">{props.TimeTableheading}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2">
        <div className="bg-[#D9E7FF] rounded-lg text-center border-2 border-[#d19747] p-6">
          <img src={img1} alt="Image 1" className="w-28 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold text-[#003366] uppercase">Time</p>
          <p className="text-base font-semibold">9:00 AM</p>
        </div>
        <div className="bg-[#D9E7FF] rounded-lg text-center border-2 border-[#d19747] p-6">
          <img src={img2} alt="Image 2" className="w-28 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase text-[#003366]">Subject</p>
          <p className="text-base font-semibold">
            {user && user.course === "Full Stack Web Development" ? "Full Stack Web Development" : ""}
            {user && user.course === "Embedded Systems & Robotics with IOT" ? "Embedded Systems & Robotics with IOT" : ""}
            {user && user.course === "Cloud Computing & DevOps" ? "Cloud Computing & DevOps" : ""}
            {user && user.course === "Data Science & Machine Learning with AI" ? "Data Science & Machine Learning with AI" : ""}
          </p>
        </div>
        <div className="bg-[#D9E7FF] rounded-lg text-center border-2 border-[#d19747] p-6">
          <img src={img3} alt="Image 3" className="w-28 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase text-[#003366]">Floor</p>
          <p className="text-base font-semibold">2nd</p>
        </div>
        <div className="bg-[#D9E7FF] rounded-lg text-center border-2 border-[#d19747] p-6">
          <img src={img4} alt="Image 4" className="w-28 h-auto object-cover mx-auto mb-3" />
          <div className='flex justify-center gap-2'>
            <p className="text-lg font-bold uppercase text-[#003366]">Topic</p>
            {user && user.profile === 'Teacher' && <CiEdit className='text-[25px] font-extrabold text-[#d19747] cursor-pointer' onClick={handleModalOpen} />}
          </div>
          <p className="text-base font-semibold">{editedTopic}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#272525bc] bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-[#10335eef] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[#f0a742]">New Topic</h2>
            <input
              type="text"
              value={editedTopic}
              onChange={(e) => setEditedTopic(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Enter topic name"
            />
            <div className="flex justify-center">
              <button className="bg-[#f0a742] text-white hover:text-[#f0a742] border-2 border-transparent hover:border-2 hover:border-[#f0a742] px-4 py-2 rounded hover:bg-[#faf7f7] mr-2" onClick={handleSaveTopic}>
                Save
              </button>
              <button className="bg-[#f0a742] text-white hover:text-[#f0a742] border-2 border-transparent hover:border-2 hover:border-[#f0a742] px-4 py-2 rounded hover:bg-[#faf7f7]" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
