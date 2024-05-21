import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticatedContext } from './userContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticat, isLoading, studentcheck } = useContext(isAuthenticatedContext);

  if(isLoading){
    return <div>Loading...</div>
  }
  console.log(studentcheck)


  // if(studentcheck){
  //   return <Navigate to="/" replace />;
  // }

  if (!isAuthenticat) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
