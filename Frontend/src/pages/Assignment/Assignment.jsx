import React, { useState, useContext, useEffect } from 'react';
import AssignmentList from '../../components/section/Assignment/AssignmentList';
import { FaPlus } from "react-icons/fa";
import AssignmentModal from '../../components/common/AssignmentModal';
import { isAuthenticatedContext } from '../../context/userContext';
import axios from 'axios';

const Assignment = () => {
  const { user } = useContext(isAuthenticatedContext);
  const [assignments, setAssignments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAssignments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/assignment/${user.course}`, { withCredentials: true });
      setAssignments(response.data.assignment);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  useEffect(() => {
    if (user) {
      getAssignments();
    }
    console.log(assignments)
  }, [user]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const addAssignment = async (newAssignment) => {
    const formattedAssignDate = new Date().toLocaleDateString().split('/').map(part => part.padStart(2, '0')).join('/');
    newAssignment.assignDate = formattedAssignDate;
    console.log(newAssignment)
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/addassignment`, newAssignment, { withCredentials: true });
      setAssignments([...assignments, response.data.newAssignment]);
      setIsModalOpen(false);
      console.log(response)
    } catch (error) {
      console.error('Error adding assignment:', error);
    }
  };

  return (
    <>
      <div className='section'>
        <div className='Container mx-auto'>
          <h1 className='md:text-[35px] text-[25px] font-semibold text-[#003366] text-center py-[10px] md:py-[30px]'>
            Let's enhance our skills by tackling the assignments ahead ...
          </h1>
          <div>
            <AssignmentList assignments={assignments} />
          </div>
          {user && user.profile === 'Teacher' && (
            <div className="flex justify-center items-center pb-8">
              <div className='bg-[#4d81d05f] rounded-full p-6 cursor-pointer' onClick={handleModalOpen}>
                <FaPlus className='text-[30px] text-[#f0ac4d]'/>
              </div>
            </div>
          )}
        </div>
      </div>
      <AssignmentModal isOpen={isModalOpen} onClose={handleModalClose} addAssignment={addAssignment} />
    </>
  );
}

export default Assignment;
