import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default UseAuth;
