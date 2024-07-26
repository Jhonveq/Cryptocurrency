import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-slate-500 to-slate-800 flex justify-center items-center">
      <div className="bg-gray-200/30 px-4 py-2 rounded-lg">
        <h2 className="text-white flex flex-col gap-2 items-center justify-center">
          <span className="text-8xl">404</span>
          <span className="text-3xl">PAGE NOT FOUND</span>
          <hr className="border-4 w w-full" />
          <span className=" cursor-pointer text-4xl hover:text-purple-950 hover:scale-105 duration-200">
            <a href="/">Go Home 🏠</a>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
