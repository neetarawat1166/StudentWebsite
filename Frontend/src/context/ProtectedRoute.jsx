import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticatedContext } from './userContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticat, isLoading } = useContext(isAuthenticatedContext);

  if(isLoading){
    return <div>Loading...</div>
  }

  if (!isAuthenticat) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
