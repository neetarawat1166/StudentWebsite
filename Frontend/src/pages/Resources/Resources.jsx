import React, { useState } from 'react';
import toast,{Toaster} from 'react-hot-toast';

const Resources = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const handleTopicAdd = () => {
    if (newTopic.trim() === '') {
     toast.error('Please enter a topic name');
      return;
    }
    setTopics([...topics, { name: newTopic, resources: [] }]);
    setNewTopic('');
  };

  const handleTopicNameChange = (index, newName) => {
    const updatedTopics = [...topics];
    updatedTopics[index].name = newName;
    setTopics(updatedTopics);
  };

  const handleResourceAdd = (index) => {
    if (!selectedFile) {
      toast.error("Please choose a file");
      return;
    }
    const updatedTopics = [...topics];
    const fileName = selectedFile.name;
    // Assuming you have some function to upload the file and get the URL
    // For demonstration, we're just simulating it with a timeout
    setTimeout(() => {
      const resource = {
        name: fileName,
        url: 'https://example.com/' + fileName // Replace with the actual URL
      };
      updatedTopics[index].resources.push(resource);
      setTopics(updatedTopics);
      setSelectedFile(null); // Clear the selected file after upload
      // Clear the file input value
      document.getElementById('file-input').value = '';
    }, 1000);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {topics.map((topic, index) => (
        <div key={index} className="mb-8">
          <div className="mb-4">
            {topic.editing ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={topic.name}
                  onChange={(e) => handleTopicNameChange(index, e.target.value)}
                  className="border border-gray-400 p-2 mr-2"
                  placeholder="Enter Topic Name"
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() =>
                    setTopics(
                      topics.map((t, i) =>
                        i === index ? { ...t, editing: false } : t
                      )
                    )
                  }
                >
                  Save
                </button>
              </div>
            ) : (
              <h2 className="text-2xl font-semibold mb-4">{`Topic Name: ${topic.name}`}</h2>
            )}
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
              id="file-input"
              type="file"
              className="border border-gray-400 p-2 mr-2"
              onChange={(e) => setSelectedFile(e.target.files[0])} 
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => handleResourceAdd(index)}
            >
              Upload File
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
