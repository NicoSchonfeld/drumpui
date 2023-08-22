"use client";

import React from "react";

const WindowsComponents = ({ children, col = "row", col2 = "col" }) => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-start py-5">
        <div className="p-5 bg-white dark:bg-white/5 flex items-center justify-center border dark:border-white/10 shadow-md w-[800px] h-[500px] rounded-lg relative">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-white/10 px-5 py-3 absolute top-0 left-0 w-full rounded-t-lg">
            <div className="flex items-center gap-1">
              <div className="w-[13px] h-[13px] bg-red-500 rounded-full"></div>
              <div className="w-[13px] h-[13px] bg-yellow-500 rounded-full"></div>
              <div className="w-[13px] h-[13px] bg-green-500 rounded-full"></div>
            </div>

            {/* <div className="bg-white dark:bg-black/50 rounded-lg px-20 py-1">
              <p>drumpui.com</p>
            </div> */}

            <span> </span>
          </div>

          <div
            className={`relative flex md:flex-${col} flex-${col2} items-center justify-center gap-5`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowsComponents;
