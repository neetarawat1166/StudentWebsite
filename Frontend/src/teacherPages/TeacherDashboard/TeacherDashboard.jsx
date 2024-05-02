import React from "react";
import Profile from "../../components/common/Profile";
import Timetable from "../../components/common/Timetable";
import Attendance from "../../components/common/Attendance";
import Announcement from "../../components/common/Announcement";
import TeacherProfile from "../../components/common/TeacherProfile";

const TeacherDashboard = () => {

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
      <section className="pr-4 relative">
        <div className="flex">
          <div className="hidden lg:block w-[20%] h-auto bg-[#eeeeee]">``
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
              <div className=" ">
              <Attendance attended="28" total="30"/>
              </div>
              <div className="">
              <Announcement announcements={announcements}/>  
              </div>
            </div>
            <div className="md:col-span-1 pl-4">
                <TeacherProfile/>   
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherDashboard;
