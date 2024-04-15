import React from "react";
import Profile from "../../components/common/Profile";
import Timetable from "../../components/common/Timetable";
import Attendance from "../../components/common/Attendance";
import Announcement from "../../components/common/Announcement";
import TeacherProfile from "../../components/common/TeacherProfile";

const Dashboard = () => {

    const announcements = [
        {
            heading: "Heading 1",
            content: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cum.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cum.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cum.","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cum."]
          },
          {
            heading: "Heading 2",
            content: ["Content 4", "Content 5"]
          }
      ];

  return (
    <>
      <section className="px-2 mb-[50px]">
        <div className="flex">
          <div className="hidden lg:block w-[20%] ">
            <Profile />
          
          </div>
          <div className="w-[80%] ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="md:col-span-2">
                <Timetable/>
              </div>
              <div className="md:col-span-1">
                <TeacherProfile/>   
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
              <div className=" ">
              <Attendance attended="28" total="30"/>
              </div>
              <div className="">
              <Announcement announcements={announcements}/>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
