import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:7800/",
});
const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = UseAuth();

  // request iterceptors to add authorization header for every secure call
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      console.log("request stopped by interceptors", token);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //   intercepts 401 & 403 and kick you out

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptors", status);
    //   for 401 & 403 log out user and send the user to login page
      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
