import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <h1 className="font-bold font-nunito text-6xl text">Welcome</h1>
      <Link
        className="bg-sky-500 shadow shadow-sky-500 py-4 px-6 mt-6 rounded-lg text-white font-bold text-2xl md:text-4xl font-nunito"
        to="shows"
      >
        Enter
      </Link>
    </div>
  );
};

export default Welcome;
