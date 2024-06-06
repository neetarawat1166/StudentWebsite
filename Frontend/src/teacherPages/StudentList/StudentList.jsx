import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { isAuthenticatedContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { isToday } from './dateUtils';

const StudentList = () => {
  const { user, updateData, setUpdateData } = useContext(isAuthenticatedContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.profile === "Student") {
      navigate("/");
    }
  }, [user, navigate]);
  
  console.log(isToday)

  const { studentList, setStudentList } = useContext(isAuthenticatedContext);

  if (!user) {
    return <div>Loading...</div>
  }

  const [usersID, setUserID] = useState([]);
  const [completeAttendanceClicked, setCompleteAttendanceClicked] = useState(false); // State to track if Complete Attendance button is clicked
  
  console.log(usersID)
  const presentbtn = (id) => {
    if (!usersID.includes(id)) {
      setUserID((prevId) => [...prevId, id]);
    } else {
      setUserID((prevId) => prevId.filter((prevId) => prevId !== id));
    }
  };

  const CompleteAttendance = async () => {
    if(usersID.length == 0){
      return toast.error("Please Select Students");
    }
    try {
      let AttendedStudents = studentList.map((student) => {
        if (usersID.includes(student._id)) {
          const newAttendance = (student.attendance + 1) % 31;
          return { ...student, attendance: newAttendance, updatedAt: new Date().toISOString() };
        }
        return student;
      });

      const response = await axios.put('http://localhost:5000/api/v1/attendance', AttendedStudents, {
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setStudentList(AttendedStudents);
        
        const newDaysCount = (updateData[0].days + 1) % 31;
        setUpdateData([{ days: newDaysCount }]);
        
        setUserID([]);
        setCompleteAttendanceClicked(true); // Set state to true to disable the button
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold mb-6 text-center text-[#003366]">
          Total Classes Done : <span className="text-[#ff9416]">{updateData && updateData[0].days}</span>/30
        </h1>
        <div className="w-full p-6 overflow-x-auto">
          <table className="table-auto mx-auto w-full border-2 border-[#003366]">
            <thead>
              <tr>
                <th className="border-2 border-[#003366] px-4 py-2">Serial No.</th>
                <th className="border-2 border-[#003366] px-4 py-2">Name</th>
                <th className="border-2 border-[#003366] px-4 py-2">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {studentList && studentList.map((student, index) => (
                <tr className="text-center" key={student._id}>
                  {
                    student.attendance == 0 ? true : false
                  }
                  <td className="border-2 border-[#003366] px-4 py-2">{index + 1}</td>
                  <td className="border-2 border-[#003366] px-4 py-2">{student.name}</td>
                  <td className="border-2 border-[#003366] px-4 py-2">
                    <div className="flex justify-center gap-10">
                      <button
                        className={`p-1 rounded-lg text-white ${
                          usersID.includes(student._id)
                            ? 'bg-orange-500'
                            : `${isToday(student) ? "bg-[#357dc5]" : "bg-[#003366] hover:bg-[#ff9416]"}`
                        } ${isToday(student) ? "cursor-not-allowed" : ""}`}
                        onClick={() => presentbtn(student._id)}
                        disabled={isToday(student)}
                      >
                        {console.log(isToday(student))}
                        Present
                      </button>
                      <span><b>{student.attendance}</b> / 30 Days</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center mt-10">
            <button
              className="p-2 text-[20px] bg-[#003366] rounded-lg text-white cursor-pointer hover:bg-[#ff9416]"
              onClick={CompleteAttendance}
              disabled={completeAttendanceClicked} // Disable the button if it's clicked
            >
              Complete Attendance
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default StudentList;
