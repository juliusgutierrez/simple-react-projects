import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return isAuthenticated ? Component : <Navigate to="/" />;
};

export default PrivateRoute;
