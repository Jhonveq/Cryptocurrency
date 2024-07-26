import React from "react";

const Loading = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 w-screen min-h-screen fixed top-20 flex items-center justify-center">
      <div className=" relative w-16 h-16 border-8 border-dashed rounded-full animate-spin border-slate-950"></div>
    </div>
  );
};

export default Loading;
