import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { isAuthenticatedContext } from "./context/userContext.jsx";

const Layout = () => {
  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(isAuthenticatedContext);
  console.log(user)
  useEffect(() => {
    
    const fetchuser = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/getuser", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setUser(res.data.user)
      setisAuthenticat(true)
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
