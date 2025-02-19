import React, { useState } from "react";
import Headline from "../../Shared/Headline";
import SocialLogin from "../../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);

  const {
    logOutUser,
    googleSignInUser,
    signInUser,
    updateUser,
    createUser,
    setLoading,
    loading,
    setUser,
    user,
  } = UseAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // checking if employee is fired or not
    const response = await axiosPublic.get(`fire/user/${email}`);
    if (response.data.isFired) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You are fired. You can't Login`,
      });
      return;
    }
    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Signed in to account of ${result.user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
        setLoading(false);
      });
  };
  return (
    <div>
      <header>
        <Headline
          title={"login"}
          subTitle={"Login To Use More Features"}
        ></Headline>
        <Helmet>
          <title>Login || 71 Digital SIgn</title>
        </Helmet>
      </header>
      <form
        onSubmit={handleLogin}
        className="card-body bg-muted-green bg-opacity-25 rounded-2xl w-full md:w-[70%] lg:w-[50%] mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute bottom-3 right-4"
          >
            {!showPassword ? <FaEye size={22} /> : <FaEyeSlash size={22} />}
          </div>
        </div>
        <div className="text-center mt-2 text-color-text">
          <p className="text-base md:text-lg">
            Don't have an account?
            <Link to={"/register"}>
              <span className="font-bold ml-1">Register Now</span>
            </Link>
          </p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white">
            Login
          </button>
        </div>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
