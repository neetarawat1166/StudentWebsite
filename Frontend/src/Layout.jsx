import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { isAuthenticatedContext } from "./context/userContext.jsx";

const Layout = () => {

  // useEffect(() => {

  //   const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(isAuthenticatedContext);

  //   const fetchuser = () => {
  //     const res = axios.get("http://localhost:5000/api/v1/getuser", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });

  //     console.log(res);
  //   };

  //   fetchuser();
  // }, []);
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(isAuthenticatedContext);
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/v1/getuser", {
  //         withCredentials: true
  //       });
  //       setUser(res.data.user);
  //       setisAuthenticat(true);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
