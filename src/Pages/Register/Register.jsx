import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import Headline from "../../Shared/Headline";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../Utilities/imageUpload";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

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
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bankAccount = e.target.bankAccount.value;
    const salary = e.target.salary.value;
    const designation = e.target.designation.value;
    const role = e.target.role.value;
    const photo = e.target.photo.files[0];
    const password = e.target.password.value;

    // verifying password
    const regexPass = /^.{6,}$/;
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;

    if (!regexPass.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters",
      });
      return;
    }
    if (!regexUpperCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 uppercase letter",
      });
      return;
    }
    if (!regexLowerCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 lowercase letter",
      });
      return;
    }
    // *image upload

    const { url: profilePhoto } = await imageUpload(photo);

    const newUser = {
      name,
      email,
      bankAccount,
      salary,
      designation,
      role,
      profilePhoto,
    };

    // *adding create user
    createUser(email, password)
      .then((result) => {
        console.log("from register page----->", result.user);
        updateUser(name, email)
          .then(async () => {
            console.log("updated User Successfully");

            // adding user info to db
            const res = await axiosSecure.post(`users/${email}`, newUser);
            console.log(res.data);
            if (res.data.insertedId) {
              logOutUser().then(() => {
                navigate("/login");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully. Please Login",
                  showConfirmButton: false,
                  timer: 3000,
                });
              });
            }
          })
          .catch((err) => {
            console.log("ERROR IN UPDATING PROFILE", err);
            setLoading(false);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
        setLoading(false);
        navigate("/");
      });
  };
  return (
    <div>
      <header>
        <Headline
          title={"Register"}
          subTitle={"Register To Use More Features"}
        ></Headline>
        <Helmet>
          <title>Register || 71 Digital SIgn</title>
        </Helmet>
      </header>
      <form
        onSubmit={handleRegister}
        className="card-body bg-muted-green bg-opacity-25 rounded-2xl w-full md:w-[80%] lg:w-[70%]  mx-auto grid grid-cols-1 md:grid-cols-2"
      >
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* Bank Account */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Bank Account No.</span>
          </label>
          <input
            name="bankAccount"
            type="number"
            placeholder="Enter your Bank Account"
            className="input input-bordered"
            required
          />
        </div>
        {/* salary */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Salary</span>
          </label>
          <input
            name="salary"
            type="number"
            placeholder="Enter your Salary"
            className="input input-bordered"
            required
          />
        </div>
        {/* designation */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Designation</span>
          </label>
          <input
            name="designation"
            type="text"
            placeholder="Enter your Designation"
            className="input input-bordered"
            required
          />
        </div>
        {/* Role */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Role</span>
          </label>
          <select name="role" className="select select-ghost w-full bg-white">
            <option disabled>Pick your role</option>
            <option value={"employee"}>Employee</option>
            <option value={"hr"}> HR</option>
          </select>
        </div>
        {/* Photo */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-color-text">Upload Photo</span>
          </label>
          <input
            name="photo"
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="text-center mt-2 text-color-text md:col-span-2">
          <p className="text-base md:text-lg">
            Already have an account?
            <Link to={"/login"}>
              <span className="font-bold ml-1">Login Now</span>
            </Link>
          </p>
        </div>

        <div className="form-control mt-6 md:col-span-2">
          <button className="btn btn-primary bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white">
            Register
          </button>
        </div>
        <div className="divider md:col-span-2">OR</div>
        <div className="md:col-span-2">
          
          <SocialLogin></SocialLogin>
        </div>
      </form>
    </div>
  );
};

export default Register;
