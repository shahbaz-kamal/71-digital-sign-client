import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: "http://localhost:7800/",
  });
const UseAxiosSecure = () => {
    return axiosSecure
};

export default UseAxiosSecure;