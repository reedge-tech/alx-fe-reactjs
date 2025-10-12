import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // change to false to test redirection

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
