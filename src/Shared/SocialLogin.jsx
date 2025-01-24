import React from "react";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SocialLogin = () => {
  // const { refetch } = useQuery();
  const navigate = useNavigate();
  const { googleSignInUser, fetchUserData, user, setLoading } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  // name,
  // email,
  // bankAccount,
  // salary,
  // designation,
  // role,
  // profilePhoto,

  const handleGoogleSignIn = async () => {
    googleSignInUser()
      .then(async (result) => {
        console.log(result.user);
        const email = result?.user?.email;
        const newUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          bankAccount: null,
          salary: null,
          designation: null,
          role: "employee",
          profilePhoto: result?.user?.photoURL,
        };
        const res = await axiosSecure.post(`users/${email}`, newUser);

        if (
          res?.data?.insertedId ||
          res?.data?.message == "User already Exists in the Database"
        ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Google Login is Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
        navigate("/");
        setLoading(false);
      });
  };
  return (
    <div onClick={handleGoogleSignIn} className="">
      <button className="w-full bg-secondary  flex items-center justify-center rounded-full py-2 gap-1 hover:bg-muted-green  transition duration-300 ease-in-out text-white hover:text-color-text">
        <div className="bg-muted-green rounded-full p-1">
          <FcGoogle size={25} />
        </div>
        <span className="font-medium text-lg md:text-xl">
          Login With Google
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
