import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <section className="animate-slidedown flex border-2 border-gray-700 shadow-2xl drop-shadow-2xl rounded-xl w-full md:mx-auto h-full mt-24 py-16 justify-center items-center">
      <div className="w-full">
        <h2 className="text-2xl text-amber-600 leading-loose tracking-wider uppercase font-extrabold text-center">
          Reset Password
        </h2>

        <div className="grid md:grid-cols-2">
          <div className="flex justify-center items-center">
            <FaMinusCircle size={226} />
          </div>
          <form className="w-full px-4 rounded-lg">
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Reset Password
            </button>
            <p className=" text-gray-300 mt-8">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-underline text-amber-500">
                Register.
              </Link>{" "}
              Or you can{" "}
              <Link to={"/login"} className="text-underline text-amber-500">
                Login
              </Link>{" "}
              instead.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reset;
