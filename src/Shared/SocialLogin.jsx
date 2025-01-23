import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="">
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
