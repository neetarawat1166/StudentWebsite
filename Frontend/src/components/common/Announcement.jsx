import React, { useState, useContext, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import img1 from "../../images/announcement.png";
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
  // console.log("hiii update data announcement",updateData)

  const [announcements, setAnnouncements] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newHeading, setNewHeading] = useState("");
  const [newContent, setNewContent] = useState("");

  const getAnnoucements = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/announcement/${user.course}`,
        { withCredentials: true }
      );
      setAnnouncements(response.data.announcement);
    } catch (error) {}
  };

  useEffect(() => {
    getAnnoucements();
  }, []);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setNewHeading("");
    setNewContent("");
  };

  const handleSaveAnnouncement = async () => {
    // if (newHeading && newContent) {
    //   const newAnnouncement = { heading: newHeading, content: newContent };
    //   setAnnouncements([...announcements, newAnnouncement]);
    //   handleClosePopup();
    // }

    try {
      // const updatedData = { ...updateData[0], announcement: {newHeading,newContent}};
      const updatedData = { newHeading, newContent };
      console.log(updatedData);
      const response = await axios.post(
        "http://localhost:5000/api/v1/addannouncement",
        updatedData,
        {
          withCredentials: true,
        }
      );

      console.log("Data updated successfully", response);
      setIsPopupOpen(false);
      getAnnoucements();
    } catch (error) {
      console.error("Error updating data", error);
    }
  };
  console.log(updateData);
  // console.log(updateData[0].announcement)

  return (
    <>
      <div className="section">
        <div className="flex justify-center items-center gap-6">
          <h1 className="text-[35px] text-[#003366] font-semibold text-center py-5">
            Announcements
          </h1>

          {user && user.profile === "Teacher" && (
            <FaEdit
              className="text-[30px] cursor-pointer text-[#d19747]"
              onClick={handleOpenPopup}
            />
          )}
        </div>
        <div className="container mx-auto bg-[#D9E7FF] py-[10px] text-[#252525] w-full rounded-lg overflow-auto h-[300px] max-h-[286px] lg:max-h-[302px] border-2 border-[#d19747]">
          {console.log("jaihind", updateData)}
          {/* {updateData &&
            updateData[0].announcement.map((item, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-[30px] font-semibold mb-2 text-center text-[#65bc7b]">
                  <div className="flex justify-center items-center gap-4">
                    {item.heading}
                  </div>
                </h2>
                <p className="text-center">{item.description}</p>
              </div>
            ))} */}

          {announcements &&
            announcements.map((item, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-[30px] font-semibold mb-2 text-center text-[#003366]">
                  <div className="flex justify-center items-center gap-4">
                    {item.heading}
                  </div>
                </h2>
                <p className="text-center">{item.description}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Popup for adding new announcement */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#272525bc] bg-opacity-50 z-50">
          <div
            className="bg-[#10335eef] p-4 rounded-lg w-[500px] max-h-[80vh] overflow-auto"
          >
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
                className="bg-[#f0a742] text-white hover:text-[#f0a742] hover:border-2 hover:border-[#f0a742] px-4 py-2 rounded hover:bg-[#faf7f7] mr-2"
                onClick={handleSaveAnnouncement}
              >
                Save
              </button>
              <button
                className="bg-[#f0a742] text-white hover:text-[#f0a742] hover:border-2 hover:border-[#f0a742] px-4 py-2 rounded hover:bg-[#faf7f7] mr-2"
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

// import React, { useState, useContext, useEffect } from "react";
// import { FaEdit } from "react-icons/fa";
// import img1 from "../../images/announcement.png";
// import BgImage from '../../images/wavii2.jpg'
// import { isAuthenticatedContext } from "../../context/userContext";
// import axios from "axios";

// const Announcement = () => {

//   const { isAuthenticat, setUser, user, setisAuthenticat,setUpdateData, updateData } = useContext(
//     isAuthenticatedContext
//   );
//   // console.log("hiii update data announcement",updateData)

//   // const [announcements, setAnnouncements] = useState([{newHeading:"CSS", newContent:"css is the styling property"}]);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [newHeading, setNewHeading] = useState("");
//   const [newContent, setNewContent] = useState("");
//   const [editedAnnouncement, seteditedAnnouncement] = useState('');

//   // console.log("gg",editedAnnouncement)
//   const handleOpenPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//     setNewHeading("");
//     setNewContent("");
//   };

//   //console.log("jiiiii",updateData[0].announcement)

// const handleSaveAnnouncement = async() => {

//     try {
//       //const updatedData = { ...updateData[0], announcement: {newHeading,newContent}};
//       const updatedData = { newHeading, newContent };
//       console.log("heyyy",updatedData);
//       const response = await axios.post('http://localhost:5000/api/v1/addannouncement', updatedData, {
//         withCredentials: true,
//       });

//       // Update the state with the new announcement added to the existing announcements
//       //setUpdateData([ ...updateData,{ announcement: updatedData }]);

//       //console.log("upfateeeee",updateData)

//       setIsPopupOpen(false)
//       console.log("Data updated successfully", response);
//     } catch (error) {
//       console.error("Error updating data", error);
//     }

//   };
//   console.log(updateData)
//   // console.log(updateData[0].announcement)

//   return (
//     <>
//       <div className="section">
//         <div className="flex justify-center items-center gap-6">
//           <h1 className="text-[35px] text-[#252525] font-semibold text-center py-5">
//             Announcements
//           </h1>

//           {user && user.profile === 'Teacher' && (
//             <FaEdit
//               className="text-[#252525] text-[30px] cursor-pointer"
//               onClick={handleOpenPopup}
//             />
//           )}
//         </div>
//         <div className="container mx-auto bg-[#eeeeee] py-[10px] text-[#252525] w-full rounded-lg overflow-auto h-[300px] max-h-[286px] lg:max-h-[302px] border-2 border-[#65bc7b]">
//           {/* {console.log("jaihind", updateData)} */}
//           {updateData &&(
//             updateData[0].announcement.map((item, index) => (
//               <div key={index} className="mb-6">
//                 <h2 className="text-[30px] font-semibold mb-2 text-center text-[#65bc7b]">
//                   <div className="flex justify-center items-center gap-4">
//                     {item.heading}
//                   </div>
//                 </h2>
//                 <p className="text-center">{item.description}</p>
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
//               <input
//                 type="text"
//                 value={newContent}
//                 onChange={(e) => setNewContent(e.target.value)}
//                 className="border border-gray-300 rounded px-3 py-2 w-full"
//                 placeholder="Enter content"
//               />
//             </div>
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
