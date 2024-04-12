import React from "react";
import Profile from "../../components/common/Profile";
import Timetable from "../../components/common/Timetable";
import Attendance from "../../components/common/Attendance";
import Announcement from "../../components/common/Announcement";
import TeacherProfile from "../../components/common/TeacherProfile";

const Dashboard = () => {
  return (
    <>
      <div className="section">
        <div className="flex">
          <div className="w-[20%] ">
            <Profile />
          </div>
          <div className="w-[80%] ">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-2 ">
                <Timetable/>
              </div>
              <div className="md:col-span-1 ">
                <TeacherProfile/>   
              </div>
            </div>
            <div className="">
                <Attendance/>
            </div>
            <div className="">
                <Announcement/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
