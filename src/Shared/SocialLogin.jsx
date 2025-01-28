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
  const { googleSignInUser, fetchUserData, user, setLoading, logOutUser } =
    UseAuth();
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
        // checking if employee is fired or not
        const response = await axiosPublic.get(
          `fire/user/${result?.user?.email}`
        );
        if (response.data.isFired) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `You are fired. You can't Login`,
          });
          logOutUser();
          return;
        }

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
            icon: "success",

            text: "Google Login Successfull",
            footer:
              '<p >If you did not updated your profile then please update your profile from "dashboard/profile" for getting salary & then HR will Cross check your information<p>',
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
