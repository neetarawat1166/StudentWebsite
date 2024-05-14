import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import img from '../../images/nodata.png'

const Resources = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [showNoResourcesText, setShowNoResourcesText] = useState(true); // Track if the text should be shown
  const fileInputRef = useRef(null);

  const handleTopicAdd = () => {
    if (newTopic.trim() === "") {
      toast.error("Please enter a topic name");
      return;
    }
    setTopics([...topics, { name: newTopic, resources: [] }]);
    setNewTopic("");
    setShowNoResourcesText(false); // Hide the text when the first topic is added
  };

  const handleResourceAdd = (index) => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files[0]) {
      toast.error("Please upload a file");
      return;
    }
    const file = fileInput.files[0];
    const updatedTopics = [...topics];
    const resource = {
      name: file.name,
      file: URL.createObjectURL(file),
    };
    updatedTopics[index].resources.push(resource);
    setTopics(updatedTopics);
    // Clear the file input
    fileInput.value = "";
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {topics.map((topic, index) => (
        <div key={index} className="mb-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">{`Topic Name: ${topic.name}`}</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources:</h3>
            {topic.resources.length > 0 ? (
              <ul>
                {topic.resources.map((resource, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={resource.file}
                      className="text-blue-500 hover:underline"
                      download
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-red-600">
                No resources available for this topic...
              </p>
            )}
          </div>
          <div className="flex justify-center items-center mt-4">
            <input
              type="file"
              ref={fileInputRef}
              className="border border-gray-400 p-2 mr-2"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => handleResourceAdd(index)}
            >
              Add
            </button>
          </div>
          <hr className="my-8" />
        </div>
      ))}

      <div className="flex items-center justify-center">
        <div className="mb-4 flex items-center justify-center">
          <input
            type="text"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            className="border border-gray-400 p-2 mr-2"
            placeholder="Enter Topic Name"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleTopicAdd}
          >
            Save
          </button>
        </div>
      </div>
      {showNoResourcesText && topics.length === 0 && (
        <>
         <img src={img} alt="" className="mx-auto h-[250px]"/>
         <p className="text-3xl text-center mb-4 text-red-600">No resources available...</p>
        
        </>
       
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Resources;
