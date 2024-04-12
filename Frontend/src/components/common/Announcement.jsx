import React from "react";
import { SlNote } from "react-icons/sl";
import img1 from '../../images/announcement.png'

const Announcement = ({ announcements }) => {
  return (
    <>
      <div className="section">
        <h1 className="text-[35px] text-[#252525] font-semibold text-center py-5">
          Announcements
        </h1>
        <div className="container mx-auto bg-[#eeeeee] py-[10px] text-[#252525] w-full rounded-lg overflow-auto max-h-[304px] border-2 border-[#65bc7b]">
          {announcements.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-[30px] text-[#65bc7b] font-semibold">No announcements for today</p>
              <img src={img1} className="lg:h-[12%] lg:w-[10%] md:h-[10%] md:w-[18%] sm:h-[10%] sm:w-[12%] h-[10%] w-[16%] mx-auto mt-6" alt="" />
            </div>
          ) : (
            announcements.map((item, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-[30px] font-semibold mb-2 text-center text-[#65bc7b]">
                  <div className="flex justify-center items-center gap-4">
                      {item.heading}
                      <img src={img1} className="lg:h-[12%] lg:w-[10%] md:h-[10%] md:w-[18%] sm:h-[10%] sm:w-[12%] h-[10%] w-[16%]" alt="" />
                  </div>
                </h2>
                <ul className="list-disc">
                  {item.content.map((contentItem, contentIndex) => (
                    <li className="w-[80%] mx-auto" key={contentIndex}>
                      {contentItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Announcement;
