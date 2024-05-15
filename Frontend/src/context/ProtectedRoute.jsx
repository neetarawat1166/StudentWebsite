// src/pages/Dashboard/ProtectedRoute.jsx
import React from "react";
import { Route,Navigate} from "react-router-dom";
import { useContext } from "react";
// import { AuthContext } from "../../context/userContext";
import { isAuthenticatedContext } from "./userContext";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticat} = useContext(isAuthenticatedContext);

  return (
    <Route
      {...rest}
      element={isAuthenticat ? <Component /> : <Navigate to="/home" />}
    />
  );
};

export default ProtectedRoute;
