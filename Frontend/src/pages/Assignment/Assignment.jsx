import React, { useState, useEffect } from 'react';
import AssignmentList from '../../components/section/Assignment/AssignmentList';
import { FaPlus } from "react-icons/fa";
import AssignmentModal from '../../components/common/AssignmentModal';

const Assignment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignments, setAssignments] = useState([
    {
      title: "Building a Full-Stack Application",
      task: "You are tasked with developing a full-stack application for managing a library system. The application should allow users to browse, borrow, and return books, as well as manage their accounts.",
      assignDate: "05/02/2024",
      dueDate: "05/30/2024",
    },
    {
      title: "Building a Social Media Platform",
      task: "Your task is to develop a full-stack social media platform that allows users to create profiles, connect with friends, share posts, and interact with each other.",
      assignDate: "05/02/2024",
      dueDate: "05/30/2024",  
    },   
    {
      title: "E-commerce Website Development",
      task: "Your task is to develop a full-stack e-commerce website where users can browse products, add them to their cart, proceed to checkout, and make purchases.",
      assignDate: "04/19/2024",
      dueDate: "05/30/2024",
    },
    {
      title: "Task Management System",
      task: "Your task is to develop a full-stack task management system where users can create, assign, prioritize, and track tasks within a team or organization.",
      assignDate: "04/15/2024",
      dueDate: "05/30/2024",
    },
    // Add more assignments as needed
  ]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const addAssignment = (newAssignment) => {
  const formattedAssignDate = new Date().toLocaleDateString().split('/').map(part => part.padStart(2, '0')).join('/');
  newAssignment.assignDate = formattedAssignDate;
  setAssignments([...assignments, newAssignment]);
  };

  return (
    <>
      <div className='section'>
        <div className='Container mx-auto'>
          <h1 className='md:text-[35px] text-[25px] font-semibold text-[#65bc7b] text-center py-[10px] md:py-[30px]'>Let's enhance our skills by tackling the assignments ahead ...</h1>
          <div>
            <AssignmentList assignments={assignments} />
          </div>
          <div className="flex justify-center items-center pb-8"> 
            <div className='bg-[#eeeeee] rounded-full p-6 cursor-pointer' onClick={handleModalOpen}>
              <FaPlus className='text-[30px] text-[#65bc7b]'/>
            </div>
          </div>
        </div>
      </div>
      <AssignmentModal isOpen={isModalOpen} onClose={handleModalClose} addAssignment={addAssignment} />
    </>
  );
}

export default Assignment;
