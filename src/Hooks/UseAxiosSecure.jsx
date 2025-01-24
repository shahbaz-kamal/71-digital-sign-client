import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:7800/",
});
const UseAxiosSecure = () => {
  const { logOutUser } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // request iterceptors to add authorization header for every secure call
   const requestInterceptor= axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        // console.log("request stopped by interceptors", token);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    //   intercepts 401 & 403 and kick you out

    const responseInterceptor=axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error?.response?.status;
        console.log("status error in the interceptors", status);
        //   for 401 & 403 log out user and send the user to login page
        if (status === 401 || status === 403) {
          await logOutUser();
          navigate("/", { replace: true });
        }
        return Promise.reject(error);
      }
    );
   // Cleanup interceptors when the component unmounts
   return () => {
    axiosSecure.interceptors.request.eject(requestInterceptor);
    axiosSecure.interceptors.response.eject(responseInterceptor);
  }; }, [logOutUser, navigate]);
  return axiosSecure;
};

export default UseAxiosSecure;
