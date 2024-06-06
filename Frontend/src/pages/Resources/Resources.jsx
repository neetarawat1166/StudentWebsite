import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { isAuthenticatedContext } from "../../context/userContext";
import { FaDownload } from "react-icons/fa";
import img from "../../images/nodata.png";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Resources = () => {
  const [file, setFile] = useState(null);
  const { user, updateData } = useContext(isAuthenticatedContext);
  const [uploadLoading, setUploadLoading] = useState(false);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadLoading(true);

    if (!file) {
      toast.error("No file selected");
      setUploadLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/addfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setUploadLoading(false);
        setFile(null);
        fileInputRef.current.value = "";
        toast.success(response.data.message);
      } else {
        toast.error("File upload failed");
        setUploadLoading(false);
      }
    } catch (error) {
      setUploadLoading(false);
      setFile(null);
      fileInputRef.current.value = "";
      toast.error("Error uploading file");
    }
  };

  const handleDownload = async (url) => {
    setUploadLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/servepdf`,
        {
          params: { url },
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = url.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
      toast.success("File Downloaded");
      setUploadLoading(false);
    } catch (error) {
      toast.error("Error downloading file");
      setUploadLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto py-10">
        {user && user.profile === "Teacher" ? (
          // <div>
          //   <h1 className='text-center text-[35px] font-bold'>
          //     Upload Resources
          //   </h1>
          //   <form onSubmit={handleSubmit}>
          //     <input
          //       type="file"
          //       onChange={handleFileChange}
          //       className="border border-gray-400 p-2 mr-2"
          //     />
          //     <button
          //       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          //       type='submit'
          //     >
          //       Upload File
          //     </button>
          //   </form>
          // </div>

          <div className="flex justify-center items-center">
            <div className="bg-[#d9e7ff] sm:p-8 p-4 rounded shadow-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
              <h1 className="text-center sm:text-3xl text-2xl text-[#003366] font-bold mb-6">
                Upload Resources
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="border border-gray-400 p-2 mb-4 md:mb-0 md:mr-2 w-full md:w-auto"
                />
                <button
                  className="bg-[#ff9416] text-white px-4 py-2 rounded hover:bg-[#003366] w-full md:w-auto"
                  type="submit"
                >
                  Upload File
                </button>
              </form>
            </div>
          </div>
        ) : updateData &&
          updateData[0] &&
          updateData[0].resourses &&
          updateData[0].resourses.length > 0 ? (
          // <div>
          //   <h1 className="text-[35px] text-center text-[#003366] font-bold mb-4">
          //     Resources
          //   </h1>
          //   <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          //     {updateData[0].resourses
          //       .slice()
          //       .reverse()
          //       .map((resource, index) => (
          //         <li
          //           key={index}
          //           className="bg-white p-10 text-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mb-4 relative"
          //         >
          //           <h2 className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300 mb-2">
          //             Resource
          //           </h2>
          //           {index === 0 && (
          //             <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          //               Latest
          //             </span>
          //           )}
          //           <button
          //             onClick={() => handleDownload(resource)}
          //             className="flex items-center justify-center p-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          //           >
          //             Download File <FaDownload className="ml-2" />
          //           </button>
          //         </li>
          //       ))}
          //   </ul>
          // </div>

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#003366] font-bold mb-8">
              Resources
            </h1>
            <ul className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {updateData[0].resourses
                .slice()
                .reverse()
                .map((resource, index) => (
                  <li
                    key={index}
                    className="bg-[#d9e7ff] p-6 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 relative"
                  >
                    <h2 className="text-xl md:text-2xl text-center font-bold text-[#003366] hover:text-[#ff9416] mb-4">
                      Resource
                    </h2>
                    {index === 0 && (
                      <span className="absolute top-4 right-4 bg-[#ff9416] text-white text-sm px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    <div className="flex items-center justify-center mt-4">
                      <button
                        onClick={() => handleDownload(resource)}
                        className="flex items-center justify-center px-6 py-2 bg-[#ff9416] text-white rounded-md hover:bg-[#003366] transition-colors duration-300"
                      >
                        Download <FaDownload className="ml-2" />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <>
            <img src={img} alt="No data" className="mx-auto h-[250px]" />
            <p className="text-3xl text-center mb-4 text-[#ff9416]">
              No resources available...
            </p>
          </>
        )}
      </div>
      {uploadLoading && (
        <div
          id="loading-screen"
          className="w-full h-full fixed block top-0 left-0 bg-gray-950 opacity-75 z-50"
        >
          <div
            role="status"
            className="animate-bounce absolute text-center text-white font-bold -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
          >
            <AiOutlineCloudUpload className="text-3xl mx-auto" />
            <span className="text-2xl">
              {user && user.profile === "Teacher"
                ? "Uploading..."
                : "Downloading..."}
            </span>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Resources;
