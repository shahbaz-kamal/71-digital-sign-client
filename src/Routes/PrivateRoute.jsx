import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
