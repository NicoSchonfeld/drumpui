import React from "react";

const CodeComponent = ({ children }) => {
  return (
    <>
      <div className="w-auto max-w-[800px] h-auto relative overflow-hidden py-10 px-5 font-medium text-[10px] md:text-[16px] sm:text-[12px] bg-gray-800 dark:bg-gray-800/50 border border-white/20 rounded-lg shadow-md">
        <div className="absolute top-3 left-4 flex items-center gap-1">
          <div className="w-[13px] h-[13px] bg-red-500 rounded-full"></div>
          <div className="w-[13px] h-[13px] bg-yellow-500 rounded-full"></div>
          <div className="w-[13px] h-[13px] bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute top-3 right-4 flex items-center gap-1">
          <span className="text-sm text-gray-500">React.js</span>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default CodeComponent;
