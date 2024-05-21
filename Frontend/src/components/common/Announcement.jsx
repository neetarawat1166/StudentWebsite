// import React, { useState,useContext } from "react";
// import { FaEdit } from "react-icons/fa";
// import img1 from "../../images/announcement.png";
// import BgImage from '../../images/wavii2.jpg'
// import { isAuthenticatedContext } from "../../context/userContext";

// const Announcement = () => {

//   const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
//     isAuthenticatedContext
//   );
//   const [announcements, setAnnouncements] = useState([]);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [newHeading, setNewHeading] = useState("");
//   const [newContent, setNewContent] = useState("");
//   const [contentList, setContentList] = useState([]);

//   const handleOpenPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//     setNewHeading("");
//     setNewContent("");
//     setContentList([]);
//   };

//   const handleSaveAnnouncement = () => {
//     // Add validation if necessary
//     if (newHeading && contentList.length > 0) {
//       setAnnouncements([
//         ...announcements,
//         { heading: newHeading, content: contentList },
//       ]);
//       handleClosePopup();
//     }
//   };

//   const handleAddContent = () => {
//     if (newContent.trim()) {
//       setContentList([...contentList, newContent]);
//       setNewContent("");
//     }
//   };

//   return (
//     <>
//       <div className="section">
//         <div className="flex justify-center items-center gap-6">
//           <h1 className="text-[35px] text-[#252525] font-semibold text-center py-5">
//             Announcements
//           </h1>
          
//             {user &&   user.profile === 'Teacher' && <FaEdit
//             className="text-[#252525] text-[30px] cursor-pointer"
//             onClick={handleOpenPopup}
//           />}
//         </div>
//         <div className="container mx-auto bg-[#eeeeee] py-[10px] text-[#252525] w-full rounded-lg overflow-auto h-[300px] max-h-[286px] lg:max-h-[302px] border-2 border-[#65bc7b]">
//           {announcements.length === 0 ? (
//             <div className="text-center py-10">
//               <p className="text-[30px] text-[#65bc7b] font-semibold">
//                 No announcements for today
//               </p>
//               <img
//                 src={img1}
//                 className="h-[200px] mx-auto"
//                 alt=""
//               />
//             </div>
//           ) : (
//             announcements.map((item, index) => (
//               <div key={index} className="mb-6">
//                 <h2 className="text-[30px] font-semibold mb-2 text-center text-[#65bc7b]">
//                   <div className="flex justify-center items-center gap-4">
//                     {item.heading}
//                     {/* <img
//                       src={img1}
//                       className="lg:h-[12%] lg:w-[10%] md:h-[10%] md:w-[18%] sm:h-[10%] sm:w-[12%] h-[10%] w-[16%]"
//                       alt=""
//                     /> */}
//                   </div>
//                 </h2>
//                 <ul className="list-disc">
//                   {item.content.map((contentItem, contentIndex) => (
//                     <li className="w-[80%] mx-auto" key={contentIndex}>
//                       {contentItem}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Popup for adding new announcement */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
//           <div className="bg-white p-4 rounded-lg w-[500px] max-h-[80vh] overflow-auto" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
//             <h2 className="text-xl font-semibold mb-4 text-[#65bc7b]">Add Announcement</h2>
//             <div className="mb-4">
//               <label className="block text-md font-medium text-[#65bc7b]">
//                 Heading
//               </label>
//               <input
//                 type="text"
//                 value={newHeading}
//                 onChange={(e) => setNewHeading(e.target.value)}
//                 className="border border-gray-300 rounded px-3 py-2 w-full"
//                 placeholder="Enter heading"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-md font-medium text-[#65bc7b]">
//                 Content
//               </label>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={newContent}
//                   onChange={(e) => setNewContent(e.target.value)}
//                   className="border border-gray-300 rounded-l px-3 py-2 w-full"
//                   placeholder="Enter content"
//                 />
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
//                   onClick={handleAddContent}
//                 >
//                   Add Content
//                 </button>
//               </div>
//             </div>
//             <ul className="list-disc ml-8 mb-4">
//               {contentList.map((contentItem, index) => (
//                 <li key={index}>{contentItem}</li>
//               ))}
//             </ul>
//             <div className="flex justify-end">
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
//                 onClick={handleSaveAnnouncement}
//               >
//                 Save
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//                 onClick={handleClosePopup}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Announcement;


import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import img1 from "../../images/announcement.png";
import BgImage from '../../images/wavii2.jpg'
import { isAuthenticatedContext } from "../../context/userContext";

const Announcement = () => {

  const { user } = useContext(isAuthenticatedContext);
  const [announcements, setAnnouncements] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newHeading, setNewHeading] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setNewHeading("");
    setNewContent("");
  };

  const handleSaveAnnouncement = () => {
    if (newHeading && newContent) {
      const newAnnouncement = { heading: newHeading, content: newContent };
      setAnnouncements([...announcements, newAnnouncement]);
      handleClosePopup();      
    }
  };

  return (
    <>
      <div className="section">
        <div className="flex justify-center items-center gap-6">
          <h1 className="text-[35px] text-[#252525] font-semibold text-center py-5">
            Announcements
          </h1>
          
          {user && user.profile === 'Teacher' && (
            <FaEdit
              className="text-[#252525] text-[30px] cursor-pointer"
              onClick={handleOpenPopup}
            />
          )}
        </div>
        <div className="container mx-auto bg-[#eeeeee] py-[10px] text-[#252525] w-full rounded-lg overflow-auto h-[300px] max-h-[286px] lg:max-h-[302px] border-2 border-[#65bc7b]">
          {announcements.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-[30px] text-[#65bc7b] font-semibold">
                No announcements for today
              </p>
              <img src={img1} className="h-[200px] mx-auto" alt="" />
            </div>
          ) : (
            announcements.map((item, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-[30px] font-semibold mb-2 text-center text-[#65bc7b]">
                  <div className="flex justify-center items-center gap-4">
                    {item.heading}
                  </div>
                </h2>
                <p className="text-center">{item.content}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Popup for adding new announcement */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg w-[500px] max-h-[80vh] overflow-auto" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#65bc7b]">Add Announcement</h2>
            <div className="mb-4">
              <label className="block text-md font-medium text-[#65bc7b]">
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
              <label className="block text-md font-medium text-[#65bc7b]">
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
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                onClick={handleSaveAnnouncement}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
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

