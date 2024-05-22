// import React, { useState, useContext } from 'react';
// import img1 from '../../images/ttimg1.png';
// import img2 from '../../images/ttimg2.png';
// import img3 from '../../images/ttimg3.png';
// import img4 from '../../images/ttimg4.png';
// import BgImage from '../../images/wavii2.jpg'
// import { CiEdit } from "react-icons/ci";
// import { isAuthenticatedContext } from '../../context/userContext';
// import axios from 'axios';

// const Timetable = (props) => {

//   const { isAuthenticat, setUser, user, setisAuthenticat, updateData } = useContext(
//     isAuthenticatedContext
//   );
//   console.log("hiii",updateData)

//   const [datasend, setDataSend] = useState({
//     topic: "bharat",
//     attendance: "Jindabad",
//     announcement: ["ki"],
//     assignment: ["jay"],
//     days: 28
//   })

//   console.log("hiiii user",user)
//   // console.log("hiiii",user.profile)
//   const [editedTopic, setEditedTopic] = useState(''); // Initial topic is HTML
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleSaveTopic = async () => {
//     setIsModalOpen(false);
//     // props.onTopicEdit(editedTopic);
//     let meclear  = await axios.put("http://localhost:5000/api/v1/updateData",datasend, {
//       withCredentials: true
//     });
//     console.log("Heyaaa",meclear)

//   };

//   return (
//     <div className="flex flex-col py-[50px]">
//       <h1 className="text-[35px] font-semibold pl-3">{props.TimeTableheading}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2">
    
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img1} alt="Image 1" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <p className="text-lg font-bold uppercase">Time</p>
//           <p className="text-base font-semibold">9:00 AM</p>
//         </div>
       
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img2} alt="Image 2" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <p className="text-lg font-bold uppercase">Subject</p>
//           <p className="text-base font-semibold">Full Stack Web Development</p>
//         </div>
     
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img3} alt="Image 3" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <p className="text-lg font-bold uppercase">Floor</p>
//           <p className="text-base font-semibold">2nd</p>
//         </div>
 
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img4} alt="Image 4" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <div className='flex justify-center gap-2'>
//             <p className="text-lg font-bold uppercase">Topic</p>
//             {user &&   user.profile === 'Teacher' && <CiEdit className='text-[25px] cursor-pointer' onClick={handleModalOpen} />}
//           </div> 
//           <p className="text-base font-semibold">{updateData && updateData[0].topic}</p> 
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
//           <div className="bg-white p-4 rounded-lg" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
//             <h2 className="text-xl font-semibold mb-4 text-[#65bc7b]">New Topic</h2>
//             <input
//               type="text"
//               value={editedTopic}
//               onChange={(e) => setEditedTopic(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 mb-4"
//               placeholder="Enter topic name"
//             />
//             <div className="flex justify-center">
//               <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2" onClick={handleSaveTopic}>
//                 Save
//               </button>
//               <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={handleModalClose}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Timetable;
// import React, { useState, useEffect, useContext } from 'react';
// import img1 from '../../images/ttimg1.png';
// import img2 from '../../images/ttimg2.png';
// import img3 from '../../images/ttimg3.png';
// import img4 from '../../images/ttimg4.png';
// import BgImage from '../../images/wavii2.jpg';
// import { CiEdit } from "react-icons/ci";
// import { isAuthenticatedContext } from '../../context/userContext';
// import axios from 'axios';

// const Timetable = (props) => {
//   const { isAuthenticat, setUser, user, setisAuthenticat,setUpdateData, updateData } = useContext(
//     isAuthenticatedContext
//   );
//   console.log("hiii update data",updateData)
  
//   // Initial state for data
//   const [data, setData] = useState({
//     topic: 'Initial Topic',
//     announcement: ['Initial Announcement'],
//     assignment: ['Initial Assignment'],
//     days: 28,
//   });

//   const [editedTopic, setEditedTopic] = useState(data.topic);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch data from the backend when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = updateData[0]
//         console.log("update",response)
//         setData(response); // Set fetched data
//         setEditedTopic(response.topic); // Set the initial topic for editing
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, [user]);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleSaveTopic = async () => {
//     try {
//       const updatedData = { ...data, topic: editedTopic };
//       const response = await axios.put('http://localhost:5000/api/v1/updateData', updatedData, {
//         withCredentials: true,
//       });
//       setUpdateData(updatedData)
//       setData(updatedData); // Update state with new data
//       setIsModalOpen(false);
//       console.log("Data updated successfully", response.data);
//     } catch (error) {
//       console.error("Error updating data", error);
//     }
//   };

//   return (
//     <div className="flex flex-col py-[50px]">
//       <h1 className="text-[35px] font-semibold pl-3">{props.TimeTableheading}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2">
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img1} alt="Image 1" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <p className="text-lg font-bold uppercase">Time</p>
//           <p className="text-base font-semibold">9:00 AM</p>
//         </div>
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img2} alt="Image 2" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <p className="text-lg font-bold uppercase">Subject</p>
//           <p className="text-base font-semibold">Full Stack Web Development</p>
//         </div>
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img3} alt="Image 3" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <p className="text-lg font-bold uppercase">Floor</p>
//           <p className="text-base font-semibold">2nd</p>
//         </div>
//         <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
//           <img src={img4} alt="Image 4" className="w-24 h-auto object-cover mx-auto mb-3" />
//           <div className='flex justify-center gap-2'>
//             <p className="text-lg font-bold uppercase">Topic</p>
//             {user && user.profile === 'Teacher' && <CiEdit className='text-[25px] cursor-pointer' onClick={handleModalOpen} />}
//           </div>
//           <p className="text-base font-semibold">{data.topic}</p>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
//           <div className="bg-white p-4 rounded-lg" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//             <h2 className="text-xl font-semibold mb-4 text-[#65bc7b]">New Topic</h2>
//             <input
//               type="text"
//               value={editedTopic}
//               onChange={(e) => setEditedTopic(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 mb-4"
//               placeholder="Enter topic name"
//             />
//             <div className="flex justify-center">
//               <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2" onClick={handleSaveTopic}>
//                 Save
//               </button>
//               <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={handleModalClose}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Timetable;


import React, { useState, useEffect, useContext } from 'react';
import img1 from '../../images/ttimg1.png';
import img2 from '../../images/ttimg2.png';
import img3 from '../../images/ttimg3.png';
import img4 from '../../images/ttimg4.png';
import BgImage from '../../images/wavii2.jpg';
import { CiEdit } from "react-icons/ci";
import { isAuthenticatedContext } from '../../context/userContext';
import axios from 'axios';

const Timetable = (props) => {
  const { isAuthenticat, setUser, user, setisAuthenticat,setUpdateData, updateData } = useContext(
    isAuthenticatedContext
  );
  console.log("hiii update data",updateData)

  const [editedTopic, setEditedTopic] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    if (updateData && updateData.length > 0) {
      setEditedTopic(updateData[0].topic); // Set the initial topic for editing
    }
  }, [user]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTopic = async () => {
    try {
      const updatedData = { ...updateData[0], topic: editedTopic };
      const response = await axios.put('http://localhost:5000/api/v1/updateData', updatedData, {
        withCredentials: true,
      });
      setUpdateData(updatedData);
      setIsModalOpen(false);
      setEditedTopic(updatedData.topic); // Update the editedTopic state with the new topic
      console.log("Data updated successfully", response);
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (  
    <div className="flex flex-col py-[50px]">
      <h1 className="text-[35px] font-semibold pl-3">{props.TimeTableheading}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2">
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img1} alt="Image 1" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Time</p>
          <p className="text-base font-semibold">9:00 AM</p>
        </div>
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img2} alt="Image 2" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Subject</p>
          <p className="text-base font-semibold">Full Stack Web Development</p>
        </div>
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img3} alt="Image 3" className="w-24 h-auto object-cover mx-auto mb-3" />
          <p className="text-lg font-bold uppercase">Floor</p>
          <p className="text-base font-semibold">2nd</p>
        </div>
        <div className="bg-[#eeeeee] rounded-lg text-center border-2 border-green-500 p-6">
          <img src={img4} alt="Image 4" className="w-24 h-auto object-cover mx-auto mb-3" />
          <div className='flex justify-center gap-2'>
            <p className="text-lg font-bold uppercase">Topic</p>
            {user && user.profile === 'Teacher' && <CiEdit className='text-[25px] cursor-pointer' onClick={handleModalOpen} />}
          </div>
          <p className="text-base font-semibold">{editedTopic}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h2 className="text-xl font-semibold mb-4 text-[#65bc7b]">New Topic</h2>
            <input
              type="text"
              value={editedTopic}
              onChange={(e) => setEditedTopic(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Enter topic name"
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
  );
};

export default Timetable;
