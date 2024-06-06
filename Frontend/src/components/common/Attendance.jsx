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
  console.log(user.attendance)
  

  const [newAttendance, setEditedAttendance] = useState(user.attendance);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTopic = () => {
    setIsModalOpen(false);
    props.onTopicEdit(newAttendance);
  };


  
  const percentage = ((user.attendance / total) * 100).toFixed(2);

  return (
    <>
      <div className="section">
        <h1 className="text-[35px] text-[#003366] font-semibold text-center py-5">
          Attendance
        </h1>
        <div className="container border-2 border-[#d19747] mx-auto bg-[#D9E7FF] py-[10px] text-center text-[#252525] w-full rounded-lg shadow-md relative">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-[18px] sm:text-[30px] md:text-[23px] lg:text-[30px] font-semibold text-[#d19747]">
              {user && user.course==="Full Stack Web Development" ? "Full Stack Web Development" : ""}
              {user && user.course==="Embedded Systems & Robotics with IOT" ? "Embedded Systems & Robotics with IOT" : ""}
              {user && user.course==="Cloud Computing & DevOps" ? "Cloud Computing & DevOps" : ""}
              {user && user.course==="Data Science & Machine Learning with AI" ? "Data Science & Machine Learning with AI" : ""}
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
      </div>
    </>
  );
};

export default Attendance;
