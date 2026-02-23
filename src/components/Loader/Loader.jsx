import React from "react";
import loader from "/src/assets/Infinity@1x-3.4s-200px-200px.svg";
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={loader} alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default Loader;
