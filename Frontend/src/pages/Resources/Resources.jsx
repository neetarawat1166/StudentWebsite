import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Resources = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [googleDriveLink, setGoogleDriveLink] = useState('');

  const handleTopicAdd = () => {
    if (newTopic.trim() === '') {
      toast.error('Please enter a topic name');
      return;
    }
    setTopics([...topics, { name: newTopic, resources: [] }]);
    setNewTopic('');
  };

  const handleResourceAdd = (index) => {
    if (googleDriveLink.trim() === '') {
      toast.error('Please enter a Google Drive link');
      return;
    }
    const updatedTopics = [...topics];
    const resource = {
      name: 'Resource', // You can customize this name if needed
      url: googleDriveLink,
    };
    updatedTopics[index].resources.push(resource);
    setTopics(updatedTopics);
    setGoogleDriveLink('');
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
            <ul>
              {topic.resources.map((resource, idx) => (
                <li key={idx} className="mb-2">
                  <a href={resource.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">{resource.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              value={googleDriveLink}
              onChange={(e) => setGoogleDriveLink(e.target.value)}
              className="border border-gray-400 p-2 mr-2"
              placeholder="Enter Google Drive Link"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => handleResourceAdd(index)}
            >
              Add Resource
            </button>
          </div>
          <hr className="my-8" />
        </div>
      ))}
      <div className="flex items-center justify-center">
        <div className="mb-4">
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
            Add Topic
          </button>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default Resources;
