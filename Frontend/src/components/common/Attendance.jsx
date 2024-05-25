import React, {useState,useContext} from "react";
import CircleProgress from "../common/AttendanceCard";
import { IoLogoWebComponent } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { isAuthenticatedContext } from "../../context/userContext";
import BgImage from '../../images/wavii2.jpg'

const Attendance = ({ attended, total }) => {

  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );
  

  const [newAttendance, setEditedAttendance] = useState('29'); // Initial topic is HTML
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTopic = () => {
    // You can implement the logic to save the edited topic here
    // For demonstration, let's just update the state with the edited topic
    setIsModalOpen(false);
    props.onTopicEdit(newAttendance);
  };


  // Calculate the percentage
  const percentage = ((newAttendance / total) * 100).toFixed(2);

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
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center">
                <h2>{newAttendance}</h2>
                <h2>/</h2>
                <h2>{total}</h2>
              </div>
              {user &&   user.profile === 'Teacher' && <CiEdit className='text-[28px] cursor-pointer' onClick={handleModalOpen} />}
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


        
      {/* Modal for editing topic */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#65bc7b]">Edit Attendance</h2>
            <input
              type="text"
              value={newAttendance}
              onChange={(e) => setEditedAttendance(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Enter new Attendance"
            />
            <div className="flex justify-center">
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
    </>
  );
};

export default Attendance;
