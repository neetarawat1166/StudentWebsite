import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { isAuthenticatedContext } from "./context/userContext.jsx";

const Layout = () => {
  const { isAuthenticat, setUser, user, setisAuthenticat, setLoading, setStudentcheck } = useContext(isAuthenticatedContext);
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
