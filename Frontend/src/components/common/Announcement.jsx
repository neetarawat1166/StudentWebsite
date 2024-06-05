import React, { useState, useContext, useEffect, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import img1 from "../../images/announcement.png";
import img from '../../images/NoAnnouncement.png'
import BgImage from "../../images/wavii2.jpg";
import { isAuthenticatedContext } from "../../context/userContext";
import axios from "axios";

const Announcement = () => {
  const {
    isAuthenticat,
    setUser,
    user,
    setisAuthenticat,
    setUpdateData,
    updateData,
  } = useContext(isAuthenticatedContext);

  const [announcements, setAnnouncements] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newHeading, setNewHeading] = useState("");
  const [newContent, setNewContent] = useState("");

  const announcementsContainerRef = useRef(null);

  const getAnnoucements = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/announcement/${user.course}`,
        { withCredentials: true }
      );
      setAnnouncements(response.data.announcement.reverse());
    } catch (error) {}
  };

  useEffect(() => {
    getAnnoucements();
  }, []);

  useEffect(() => {
    if (announcementsContainerRef.current) {
      announcementsContainerRef.current.scrollTop = 0;
    }
  }, [announcements]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setNewHeading("");
    setNewContent("");
  };

  const handleSaveAnnouncement = async () => {
    try {
      const updatedData = { newHeading, newContent };
      const response = await axios.post(
        "http://localhost:5000/api/v1/addannouncement",
        updatedData,
        {
          withCredentials: true,
        }
      );

      setIsPopupOpen(false);
      getAnnoucements();
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (
    <>
      <div className="section">
        <div className="flex justify-center items-center gap-6">
          <h1 className="text-4xl font-semibold text-[#003366] text-center py-5">
            Announcements
          </h1>
          {user && user.profile === "Teacher" && (
            <FaEdit
              className="text-3xl cursor-pointer text-[#d19747]"
              onClick={handleOpenPopup}
            />
          )}
        </div>
        <div className="container mx-auto bg-[#D9E7FF]  px-6 w-full py-9 rounded-lg border-2 border-[#d19747] overflow-auto max-h-[300px]">
          {announcements.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-2xl font-semibold text-[#d19747]">
                No Announcements yet...
              </h2>
              <img src={img} alt="" className="w-[30%] h-auto" />
            </div>
          ) : (
            <div ref={announcementsContainerRef} className="w-[90%] mx-auto">
              {announcements.map((item, index) => (
                <div key={index} className={`bg-white shadow-lg rounded-lg overflow-hidden mb-4 ${index === 0 ? 'overflow-visible border-2 border-yellow-400 bg-[#d88c2247] relative flex items-cente flex-row' : ''}`}>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#003366]">
                      {item.heading}
                    </h2>
                    <p className="text-lg">{item.description}</p>
                  </div>
                    {index === 0 && (
                      <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                        <span className="animate-ping absolute inline-flex size-full rounded-full bg-[#d19747] opacity-75 dark:bg-[#d19747]"></span>
                        <span className="relative inline-flex text-[14px] font-bold bg-[#d19747] text-white rounded-full py-1 px-2">
                          Latest
                        </span>
                      </span>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popup for adding new announcement */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-[#d19747]">
              Add Announcement
            </h2>
            <div className="mb-4">
              <label className="block text-md font-medium text-[#d19747]">
                Heading
              </label>
              <input
                type="text"
                value={newHeading}
                onChange={(e) => setNewHeading(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                placeholder="Enter heading"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium text-[#d19747]">
                Content
              </label>
              <input
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                placeholder="Enter content"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#f0a742] text-white px-4 py-2 rounded mr-2 hover:bg-[#faf7f7] hover:text-[#f0a742]"
                onClick={handleSaveAnnouncement}
              >
                Save
              </button>
              <button
                className="bg-[#f0a742] text-white px-4 py-2 rounded mr-2 hover:bg-[#faf7f7] hover:text-[#f0a742]"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcement;
