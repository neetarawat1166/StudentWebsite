import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { isAuthenticatedContext } from "./context/userContext.jsx";

const Layout = () => {
  const { isAuthenticat, setUser, user, setisAuthenticat, setLoading, setStudentcheck, setStudentList, setUpdateData } = useContext(isAuthenticatedContext);
  // console.log(user)
  useEffect(() => {
    
    const fetchuser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/getuser", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setUser(res.data.user);
        setisAuthenticat(true);
        if(res.data.user.profile === "Teacher"){
          setStudentcheck(false)
        }
      } catch (error) {
        setisAuthenticat(false);
      } finally {
        setLoading(false);
      }
    };
    fetchuser();

    const fetchStudents = async () => {
      if (user) {                       //changes done here (&& user.profile =="Teacher")...................
        let course = user.course;
        // console.log("hii course",course)
        if (course) {
          try {
            const response = await axios.post("http://localhost:5000/api/v1/students", { course });
            console.log("india", response)
            if (user && user.profile =="Teacher") {
              setStudentList(response.data.students); 
            }
            setUpdateData(response.data.UpdateData)
          } catch (error) {
            console.error("Error fetching students:", error);
          }
        }
      }
    };

    fetchStudents();
  }, [isAuthenticat]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
