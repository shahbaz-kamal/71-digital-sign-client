// this is for both hr and admin

import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import UseRole from "../Hooks/UseRole";
import Loading from "../Shared/Loading";

const PrivateCommon = ({ children }) => {
  const { user, loading: authLoading } = UseAuth();
  const location = useLocation();
  const { role, roleLoading } = UseRole();
  if (authLoading || roleLoading) {
    return <Loading></Loading>;
  }
  if (user && user?.email && (role === "hr" || role === "admin")) {
    return children;
  }
  return <Navigate to={'/login'} state={{from:location}}></Navigate>
};

export default PrivateCommon;
