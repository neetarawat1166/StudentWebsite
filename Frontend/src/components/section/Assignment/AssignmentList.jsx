import { format } from 'date-fns';
import React from 'react';
import { FaBookOpenReader } from "react-icons/fa6";

const AssignmentList = ({ assignments }) => {
  const today = format(new Date(), 'dd/MM/yyyy');

  const assignmentsForToday = assignments.filter(
    (assignment) => assignment.assignDate === today
  );

  const upcomingAssignments = assignments.filter(
    (assignment) => new Date(assignment.dueDate) >= new Date(today) && assignment.assignDate !== today
  );

  return (
    <div className="container w-[60%] mx-auto mt-8 mb-8">
      {assignmentsForToday.length === 0 && upcomingAssignments.length === 0 ? (
        <p className="text-center text-red-700 md:text-[25px] text-[15px] bg-[#eeeeee] p-4 rounded-lg">No assignments for today <span className='text-[#65bc7b] font-semibold'>({today})</span> and no upcoming assignments.</p>
      ) : (
        <>
          {assignmentsForToday.length > 0 && (
            <div>
              <h2 className="font-bold mb-4 text-center md:text-[30px] text-[20px] text-[#003366]">Assignments for today ({today}):</h2>
              {assignmentsForToday.map((assignment, index) => (
                <div key={index} className="bg-[#7881e981] border-2 border-[#d2ae40] rounded-lg p-4 mb-4">
                  <div className='flex justify-start gap-4'>
                    <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                    <FaBookOpenReader className=' hidden sm:block text-[25px] text-black' />
                  </div>
                  <p className="text-black mb-2">{assignment.task}</p>
                  <div className='flex flex-col sm:flex-row sm:justify-between'>
                    <p className="text-black mb-2"><span className='font-semibold text-blue-600'>Assigned:</span> {assignment.assignDate}</p>
                    <p className="text-black"><span className='font-semibold text-red-700'>Due Date:</span> {assignment.dueDate}</p>
                  </div>  
                </div>
              ))}
            </div>
          )}
          {upcomingAssignments.length > 0 && (
            <div>
              <h2 className="font-bold mb-4 text-center md:text-[30px] text-[20px] text-[#003366]">Upcoming Assignments:</h2>
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className="bg-[#7881e981] border-2 border-[#d2ae40] rounded-lg p-4 mb-4">
                  <div className='flex justify-start gap-4'>
                    <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                    <FaBookOpenReader className='hidden sm:block text-[25px] text-black'/>
                  </div>
                  <p className="text-black mb-2">{assignment.task}</p>
                  <div className='flex flex-col sm:flex-row sm:justify-between'>
                    <p className="text-black mb-2"><span className='font-semibold text-blue-600'>Assigned:</span> {assignment.assignDate}</p>
                    <p className="text-black"><span className='font-semibold text-red-700'>Due Date:</span> {assignment.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AssignmentList;
