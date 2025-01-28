import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:7800/",
  baseURL: "https://71-digital-sign-server.vercel.app/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
