import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <div className="rounded-3xl shadow-md p-4 shadow-gray-300 flex flex-col justify-center items-center min-h-[60vh] w-[95vw] md:w-[60vw]">
        <h1 className="font-bold font-nunito text-6xl text">Welcome</h1>
        <Link
          className="bg-sky-500 shadow shadow-sky-800 py-4 px-6 mt-6 rounded-lg text-white font-bold text-2xl md:text-4xl font-nunito"
          to="shows"
        >
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
