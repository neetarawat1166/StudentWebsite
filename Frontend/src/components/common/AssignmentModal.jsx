import React, { useState, useRef, useEffect } from 'react';
import { ImCross } from "react-icons/im";
import toast, { Toaster } from 'react-hot-toast';
import BgImage from '../../images/wavii2.jpg';

const AssignmentModal = ({ isOpen, onClose, addAssignment }) => {
  const today = new Date();
  const [minDate] = useState(() => today.toISOString().split('T')[0]);
  const formRef = useRef(null);
  const modalRef = useRef(null); // Reference to the modal container

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const assignmentHeading = formData.get('assignmentHeading');
    const assignmentDescription = formData.get('assignmentDescription');
    const dueDate = new Date(formData.get('dueDate'));

    if (!assignmentHeading || !assignmentDescription || !dueDate) {
      return toast.error("Please fill all the fields");
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
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'flex justify-center items-center' : 'hidden'}`}>
      <div ref={modalRef} className="bg-[#10335eef] px-8 pt-8 pb-6 rounded-lg relative w-[380px] sm:w-[500px]">
        <button onClick={handleModalClose} className="absolute top-0 right-[2%] mt-2 ml-2 text-[#d19747] hover:text-white"><ImCross /></button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#d19747]">Add New Assignment</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="pb-4">
            <label htmlFor="assignmentHeading" className="block text-md font-medium text-[#d19747]">Assignment Heading:</label>
            <input type="text" id="assignmentHeading" name="assignmentHeading" className="border border-black rounded-md px-3 py-2 w-full" />
          </div>
          <div className="pb-4">
            <label htmlFor="assignmentDescription" className="block text-md font-medium text-[#d19747]">Assignment Description:</label>
            <textarea id="assignmentDescription" name="assignmentDescription" rows="4" className="border border-black rounded-md px-3 py-2 w-full"></textarea>
          </div>
          <div className="pb-6">
            <label htmlFor="dueDate" className="block text-md font-medium text-[#d19747]">Please select Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" className="border border-black rounded-md px-3 py-2" min={minDate} />
          </div>
          <button type="submit" className="bg-[#d19747] text-white text-[18px] border-2 border-transparent hover:border-2 hover:border-[#f0a742] font-semibold px-4 py-2 mx-auto block rounded-md hover:bg-white hover:text-[#f0a742]">Submit</button>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AssignmentModal;
