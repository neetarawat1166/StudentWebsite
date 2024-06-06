import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { isAuthenticatedContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const StudentList = () => {
  const { user, updateData, setUpdateData } = useContext(isAuthenticatedContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.profile === "Student") {
      navigate("/");
    }
  }, [user, navigate]);

  const { studentList, setStudentList } = useContext(isAuthenticatedContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  const [usersID, setUserID] = useState([]);

  const presentbtn = (id) => {
    setUserID((prevId) => [...prevId, id]);
  };

  const CompleteAttendance = async () => {
    try {
      let AttendedStudents = studentList.map((student) => {
        if (usersID.includes(student._id)) {
          const newAttendance = (student.attendance + 1) % 31;
          return { ...student, attendance: newAttendance };
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
                  <td className="border-2 border-[#003366] px-4 py-2">{index + 1}</td>
                  <td className="border-2 border-[#003366] px-4 py-2">{student.name}</td>
                  <td className="border-2 border-[#003366] px-4 py-2">
                    <div className="flex justify-center gap-10">
                      <button
                        className={`p-1 rounded-lg text-white ${usersID.includes(student._id) ? 'bg-orange-500' : 'bg-[#003366] hover:bg-[#ff9416]'}`}
                        onClick={() => presentbtn(student._id)}
                      >
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