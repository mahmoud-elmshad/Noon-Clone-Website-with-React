import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
export default function ProtectedRoute({ children }) {
  let { user } = useAuth();
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
