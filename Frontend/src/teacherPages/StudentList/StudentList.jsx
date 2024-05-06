import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentList = () => {
  const [fullStackStudents, setFullStackStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/students");
        const { fullStackStudents } = response.data;
        setFullStackStudents(fullStackStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-6 text-center text-[#65bc7b]">Student's List</h1>

      <div className="w-full p-6 overflow-x-auto">
        <table className="table-auto mx-auto w-full border-2 border-[#65bc7b]">
          <thead>
            <tr>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Serial No.</th>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Name</th>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Email</th>
              <th className="border-2 border-[#65bc7b] px-4 py-2">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {fullStackStudents.map((student, index) => (
              <tr className="text-center" key={student._id}>
                <td className="border-2 border-[#65bc7b] px-4 py-2">{index + 1}</td>
                <td className="border-2 border-[#65bc7b] px-4 py-2">{student.name}</td>
                <td className="border-2 border-[#65bc7b] px-4 py-2">{student.email}</td>
                <td className="border-2 border-[#65bc7b] px-4 py-2">{student.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render other tables for different courses */}
    </div>
  );
};

export default StudentList;
