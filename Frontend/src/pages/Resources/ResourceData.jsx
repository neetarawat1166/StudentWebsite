// import React, { useState } from 'react';

// const ResourceData = ({ topic, resources, onTopicEdit, onResourceAdd }) => {
//   const [newTopic, setNewTopic] = useState(topic);
//   const [selectedFile, setSelectedFile] = useState(null);
    
//   const handleTopicEdit = () => {
//     // Call the onTopicEdit callback with the updated topic
//     onTopicEdit(newTopic);
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleResourceAdd = () => {
//     if (selectedFile) {
//       // Call the onResourceAdd callback with the selected file
//       onResourceAdd(selectedFile);
//       // Reset the selected file
//       setSelectedFile(null);
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">{`Topic Name: ${newTopic}`}</h2>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           className="border border-gray-400 p-2 mr-2 w-1/2"
//           value={newTopic}
//           onChange={(e) => setNewTopic(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={handleTopicEdit}
//         >
//           Save
//         </button>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Resources:</h3>
//         <div className="flex items-center mb-4">
//           <input
//             type="file"
//             className="border border-gray-400 p-2 mr-2"
//             onChange={handleFileChange}
//           />
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             onClick={handleResourceAdd}
//           >
//             Upload PDF
//           </button>
//         </div>
//         <ul>
//           {resources.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a href={resource.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">{resource.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ResourceData;
