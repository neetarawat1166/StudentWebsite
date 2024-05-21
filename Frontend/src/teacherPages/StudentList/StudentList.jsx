import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { isAuthenticatedContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  // const [students, setStudents] = useState();
  const { user } = useContext(isAuthenticatedContext);
  let navigate = useNavigate()
  useEffect(() =>{
    if(user.profile == "Student"){
      navigate("/");
    }
  },[user])

  const {studentList}  =useContext(isAuthenticatedContext)
  // console.log(studentList)
  // setStudents(studentList)
  // console.log(students)

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-6 text-center text-[#65bc7b]">Total Classes Done : 0/30</h1>
      {/* <h1 className="text-4xl font-semibold mb-6 text-center text-[#65bc7b]">Student's List</h1> */}

      <div className="w-full p-6 overflow-x-auto">
        <table className="table-auto mx-auto w-full border-2 border-[#65bc7b]">
          <thead>
            <tr>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Serial No.</th>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Name</th>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {studentList && studentList.map((student, index) => (
              <tr className="text-center" key={student._id}>
                <td className="border-2 border-[#65bc7b] px-4 py-2">{index + 1}</td>
                <td className="border-2 border-[#65bc7b] px-4 py-2">{student.name}</td>
                <td className="border-2 border-[#65bc7b] px-4 py-2">
                  <div className="flex justify-center gap-10">
                        {student.name}
                        <button className="bg-[#65bc7b] p-1 rounded-lg text-white">Present</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center mt-10 ">
           <button className="p-2 text-[20px] bg-[#65bc7b] rounded-lg text-white cursor-pointer">Complete Attendance</button>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
