import React from "react";
import Headline from "../../Shared/Headline";
import SocialLogin from "../../Shared/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <header>
        <Headline
          title={"login"}
          subTitle={"Login To Use More Features"}
        ></Headline>
      </header>
      <form className="card-body bg-muted-green bg-opacity-25 rounded-2xl w-full md:w-[70%] lg:w-[50%] mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="text-center mt-2 text-color-text">
          <p className="text-base md:text-lg">
            Don't have an account?
            <Link to={'/register'}>
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
