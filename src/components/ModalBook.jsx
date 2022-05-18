import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const ModalBook = () => {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [showName, imageUrl] = useOutletContext();
  return (
    <div className="fixed flex justify-center items-center h-screen w-screen bg-gray-500 bg-opacity-50">
      <div className="h-[80vh] md:h-auto w-[95vw] md:w-[80vw] bg-white flex flex-col p-8 shadow-md shadow-gray-500 rounded-lg my-2 overflow-y-scroll">
        <div className="flex items-center flex-wrap">
          <h1 className="text-4xl md:text-6xl font-nunito break-words inline-block mr-4">
            {showName}
          </h1>
          <button className="bg-green-500 text-white font-semibold text-lg py-2 px-4 mt-4 rounded-full shadow-md animate-bounce">
            Book Now
          </button>
        </div>
        <hr className="my-4" />

        <div className="flex flex-col md:flex-row">
          <img src={imageUrl} alt="" className="max-h-[65vh] rounded-lg" />
          <form action="submit" className="md:p-12 mt-5 md:mt-0 flex-1 ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-2xl font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-2xl font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
        <hr className="my-4" />

        <button
          className="bg-red-500 shadow-sm shadow-red-900 active:shadow-none p-2 rounded-lg text-white font-bold w-fit h-fit self-end text-xl md:text-2xl"
          onClick={goBack}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ModalBook;
