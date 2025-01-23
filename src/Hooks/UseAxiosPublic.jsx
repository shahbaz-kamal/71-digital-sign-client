import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:7800/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
