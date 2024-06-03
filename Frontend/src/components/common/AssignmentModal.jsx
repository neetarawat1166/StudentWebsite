import React, { useState, useRef, useEffect } from 'react';
import { ImCross } from "react-icons/im";
import toast, { Toaster } from 'react-hot-toast';
import BgImage from '../../images/wavii2.jpg';

const AssignmentModal = ({ isOpen, onClose, addAssignment }) => {
  const today = new Date();
  const [minDate] = useState(() => today.toISOString().split('T')[0]);
  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const assignmentHeading = formData.get('assignmentHeading');
    const assignmentDescription = formData.get('assignmentDescription');
    const dueDate = new Date(formData.get('dueDate'));

    if (!assignmentHeading || !assignmentDescription || !dueDate) {
      return toast.error("Please fill all the fields");
    }
    console.log("india duedate", dueDate);
    if(dueDate == "Invalid Date"){
      return toast.error("Please fill all the fields");
    }

    if (dueDate < today) {
      setErrorMessage("Due date cannot be in the past");
      return;
    }

    const formattedDueDate = `${dueDate.getDate().toString().padStart(2, '0')}/${(dueDate.getMonth() + 1).toString().padStart(2, '0')}/${dueDate.getFullYear()}`;
    const newAssignment = { title: assignmentHeading, task: assignmentDescription, dueDate: formattedDueDate };

    addAssignment(newAssignment);
    onClose();
    formRef.current.reset();
  };

  const handleModalClose = () => {
    onClose();
    formRef.current.reset();
    setErrorMessage("");
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'flex justify-center items-center' : 'hidden'}`}>
      <div className="px-8 pt-8 pb-6 rounded-lg relative w-[380px] sm:w-[500px]" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <button onClick={handleModalClose} className="absolute top-0 right-[2%] mt-2 ml-2 text-gray-500 hover:text-gray-700"><ImCross /></button>
        <h2 className="text-[25px] font-bold mb-4 text-center text-[#65bc7b]">Add New Assignment</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="pb-4">
            <label htmlFor="assignmentHeading" className="block font-medium">Assignment Heading:</label>
            <input type="text" id="assignmentHeading" name="assignmentHeading" className="border border-black rounded-md px-3 py-2 w-full" />
          </div>
          <div className="pb-4">
            <label htmlFor="assignmentDescription" className="block font-medium">Assignment Description</label>
            <textarea id="assignmentDescription" name="assignmentDescription" rows="4" className="border border-black rounded-md px-3 py-2 w-full"></textarea>
          </div>
          <div className="pb-6">
            <label htmlFor="dueDate" className="block font-medium">Please select Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" className="border border-black rounded-md px-3 py-2" min={minDate} />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className="bg-[#65bc7b] text-white text-[18px] font-semibold px-4 py-2 mx-auto block rounded-md hover:bg-[#252525]">Submit</button>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AssignmentModal;
