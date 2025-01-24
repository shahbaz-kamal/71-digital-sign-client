import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";
import UseRole from "../Hooks/UseRole";
import UseAuth from "../Hooks/UseAuth";

const PrivateEmployee = ({ children }) => {
  const { user, loading: authLoading } = UseAuth();
  const location = useLocation();
  const { role, roleLoading } = UseRole();

  if (authLoading || roleLoading) {
    return <Loading></Loading>;
  }
  if (user && user?.email && role === "employee") {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateEmployee;
