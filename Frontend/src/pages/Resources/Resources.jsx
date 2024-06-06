import React, { useContext, useState } from 'react';
import axios from 'axios';
import { isAuthenticatedContext } from '../../context/userContext';
import { FaDownload } from "react-icons/fa";
import img from '../../images/nodata.png';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineCloudUpload } from "react-icons/ai";

const Resources = () => {
  const [file, setFile] = useState(null);
  const { user, updateData } = useContext(isAuthenticatedContext);
  const [uploadLoading, setUploadLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadLoading(true);

    if (!file) {
      toast.error('No file selected');
      setUploadLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/addfile",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      );
      if (response.data.success) {
        setUploadLoading(false);
        setFile(null);
        toast.success(response.data.message);
      } else {
        toast.error('File upload failed');
        setUploadLoading(false);
      }
    } catch (error) {
      setUploadLoading(false);
      setFile(null);
      toast.error('Error uploading file');
    }
  };

  const handleDownload = async (url) => {
    setUploadLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/servepdf`, {
        params: { url },
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = url.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
      toast.success('File Downloaded');
      setUploadLoading(false);
    } catch (error) {
      toast.error('Error downloading file');
      setUploadLoading(false);
    }
  };

  return (
    <>
      <div className='container mx-auto py-10'>
        {user && user.profile === "Teacher" ? (
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-400 p-2 mr-2"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              type='submit'
            >
              Upload File
            </button>
          </form>
        ) : (
          updateData && updateData[0] && updateData[0].resourses && updateData[0].resourses.length > 0 ? (
            <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300'>
              {updateData[0].resourses.slice().reverse().map((resource, index) => (
                <li key={index} className="bg-white p-10 text-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mb-4 relative">
                  <h2 className='text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300 mb-2'>
                    Resource
                  </h2>
                  {index === 0 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Latest
                    </span>
                  )}
                  <button
                    onClick={() => handleDownload(resource)}
                    className='flex items-center justify-center p-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'
                  >
                    Download File <FaDownload className='ml-2' />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <img src={img} alt="No data" className="mx-auto h-[250px]" />
              <p className="text-3xl text-center mb-4 text-[#ff9416]">No resources available...</p>
            </>
          )
        )}
      </div>
      {
        uploadLoading && (
          <div id="loading-screen" className="w-full h-full fixed block top-0 left-0 bg-gray-950 opacity-75 z-50">
            <div
              role="status"
              className="animate-bounce absolute text-center text-white font-bold -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
            >
              <AiOutlineCloudUpload className='text-3xl mx-auto' />
              <span className='text-2xl'>
                {user && user.profile === "Teacher" ? "Uploading..." : "Downloading..."}
              </span>
            </div>
          </div>
        )
      }
      <Toaster />
    </>
  );
};

export default Resources;
