import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { LuPrinterCheck } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="animate-spin m-auto text-secondary ">
      <ImSpinner9 size={100}/>
      </div>
    </div>
  );
};

export default Loading;
