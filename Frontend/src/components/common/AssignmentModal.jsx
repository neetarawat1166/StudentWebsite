import React from 'react';
import { ImCross } from "react-icons/im";
import toast, {Toaster} from 'react-hot-toast'
import BgImage from '../../images/wavii2.jpg'

const AssignmentModal = ({ isOpen, onClose, addAssignment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const assignmentHeading = formData.get('assignmentHeading');
    const assignmentDescription = formData.get('assignmentDescription');
    const dueDate = formData.get('dueDate');

    if (!assignmentHeading || !assignmentDescription || !dueDate) {
      // Display an error toast if any of the fields are empty
      return toast.error("Please fill all the fields");
    }

    // Handle form submission logic here
    const newAssignment = {
      title: assignmentHeading,
      task: assignmentDescription,
      assignDate: new Date().toLocaleDateString(),
      dueDate: dueDate,
    };

    addAssignment(newAssignment);

    // Close the modal after submitting the form
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'flex justify-center items-center' : 'hidden'}`}>
      <div className="px-8 pt-8 pb-6 rounded-lg relative w-[380px] sm:w-[500px]" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <button onClick={onClose} className="absolute top-0 right-[2%] mt-2 ml-2 text-gray-500 hover:text-gray-700"><ImCross /></button>
        <h2 className="text-[25px] font-bold mb-4 text-center text-[#65bc7b]">Add New Assignment</h2>
        <form onSubmit={handleSubmit}>
          <div className="pb-4">
            <label htmlFor="assignmentHeading" className="block font-medium">Assignment Heading:</label>
            <input type="text" id="assignmentHeading" name="assignmentHeading" className="border border-black rounded-md px-3 py-2 w-full" />
          </div>
          <div className="pb-4">
            <label htmlFor="assignmentDescription" className="block font-medium">Assignment Description"</label>
            <textarea id="assignmentDescription" name="assignmentDescription" rows="4" className="border border-black rounded-md px-3 py-2 w-full"></textarea>
          </div>
          <div className="pb-6">
            <label htmlFor="dueDate" className="block font-medium">Please select Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" className="border border-black rounded-md px-3 py-2" />
          </div>
          <button type="submit" className="bg-[#65bc7b] text-white text-[18px] font-semibold px-4 py-2 mx-auto block rounded-md hover:bg-[#252525]">Submit</button>
        </form>
        <Toaster 
                    position="top-center"
                    reverseOrder={false}
        />
      </div>
    </div>
  );
};

export default AssignmentModal;
