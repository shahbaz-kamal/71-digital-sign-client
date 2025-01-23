import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import Headline from "../../Shared/Headline";

const Register = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const bankAccount=e.target.bankAccount.value;
        const salary=e.target.salary.value;
        const designation=e.target.designation.value;
        const role=e.target.role.value;
        const photo=e.target.photo.value;
        const newUser={name,email,bankAccount,salary,designation,role,photo}
        console.log(newUser)
    }
  return (
    <div>
      <header>
        <Headline
          title={"Register"}
          subTitle={"Register To Use More Features"}
        ></Headline>
      </header>
      <form onSubmit={handleSubmit} className="card-body bg-muted-green bg-opacity-25 rounded-2xl w-full md:w-[70%] lg:w-[50%] mx-auto">
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
            <option disabled >
              Pick your role
            </option>
            <option value={"employee"}>Employee</option>
            <option value={"hr"}> HR</option>
          </select>
        </div>
        {/* Photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Upload Photo</span>
          </label>
          <input
            name="photo"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
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
        <div className="text-center mt-2 text-color-text">
          <p className="text-base md:text-lg">
            Already have an account?
            <Link to={"/login"}>
              <span className="font-bold ml-1">Login Now</span>
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

export default Register;
