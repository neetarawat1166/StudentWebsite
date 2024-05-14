import React, { useState, useContext } from 'react';
import img1 from '../../images/ttimg1.png';
import img2 from '../../images/ttimg2.png';
import img3 from '../../images/ttimg3.png';
import img4 from '../../images/ttimg4.png';
import { CiEdit } from "react-icons/ci";
import { isAuthenticatedContext } from '../../context/userContext';

const Timetable = (props) => {

  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );
  console.log("hiiii",user)
  // console.log("hiiii",user.profile)
  const [editedTopic, setEditedTopic] = useState('HTML'); // Initial topic is HTML
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTopic = () => {
    setIsModalOpen(false);
    props.onTopicEdit(editedTopic);
  };

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
          <div className='flex justify-center gap-2'>
            <p className="text-lg font-bold uppercase">Topic</p>
            {user &&   user.profile === 'Teacher' && <CiEdit className='text-[25px] cursor-pointer' onClick={handleModalOpen} />}
          </div>
          <p className="text-base font-semibold">{editedTopic}</p> {/* Use editedTopic here */}
        </div>
      </div>

      {/* Modal for editing topic */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Topic</h2>
            <input
              type="text"
              value={editedTopic}
              onChange={(e) => setEditedTopic(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Enter topic name"
            />
            <div className="flex justify-end">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2" onClick={handleSaveTopic}>
                Save
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={handleModalClose}>
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
