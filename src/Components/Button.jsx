import React from "react";

const Button = () => {
  return (
    <div className=" ">
        <div className="relative group ">
          <div className="absolute inset-0 max-w-xs bg-gradient-to-r from-purple-900 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button className="relative px-7 border-violet-800 border-2 py-4 shadow-2xl bg-white rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="pr-6 text-black font-bold text-md">
              Get  Started
            </span>
            <span className="pl-6  text-indigo-800 font-bold ">
              See what's new &rarr;
            </span>
          </button>
        </div>
    </div>
  );
};

export default Button;
