import React, { useContext, useEffect } from "react";
import Profile from "../../components/common/Profile";
import Timetable from "../../components/common/Timetable";
import Attendance from "../../components/common/Attendance";
import Announcement from "../../components/common/Announcement";
import FullStackTeacherProfile from "../../teacherPages/TeacherProfile/FullStackTeacherProfile";
import { isAuthenticatedContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import IOTTeacherProfile from "../../teacherPages/TeacherProfile/IOTTeacherProfile";
import CloudTeacherProfile from "../../teacherPages/TeacherProfile/CloudTeacherProfile";
import DataScienceTeacherProfile from "../../teacherPages/TeacherProfile/DataScienceTeacherProfile";


const Dashboard = () => {

  const {isAuthenticat, setUser, user, setisAuthenticat, updateData} = useContext(isAuthenticatedContext)

  //console.log(updateData)
  // console.log("userknown",user.course);

  return (
    <>
      {isAuthenticat ? <section className="pr-4 relative">
        <div className="flex">
          <div className="hidden lg:block w-[20%] h-auto bg-[#D9E7FF]">
            <div className=" sticky top-0">
              <Profile />
            </div>
          </div>
          <div className="w-full lg:w-[80%]"> 
            <div className="">
              <div className="">
                <Timetable TimeTableheading={"Your TimeTable"}/>
              </div>
            </div>
            {user && user.profile==='Teacher' &&  <div className="pl-4">
              <div className="">
              <Announcement/>  
              </div>
            </div>}

            {user && user.profile==='Student' &&  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
              <div className=" ">
              <Attendance total="30"/> 
              </div>
              <div className="">
              <Announcement/>  
              </div>
            </div>}

            <div className="md:col-span-1 pl-4">
              {user && user.course==="Full Stack Web Development" ? <FullStackTeacherProfile/> : ""}
              {user && user.course==="Embedded Systems & Robotics with IOT" ? <IOTTeacherProfile/> : ""}
              {user && user.course==="Cloud Computing & DevOps" ? <CloudTeacherProfile/> : ""}
              {user && user.course==="Data Science & Machine Learning with AI" ? <DataScienceTeacherProfile/> : ""}
            </div>
          </div>
        </div>
      </section> : 'User Not Authorized'}
      <Toaster/>
    </>
  );
};

export default Dashboard;
