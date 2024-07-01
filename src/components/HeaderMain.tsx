import React from "react";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-10 ml-2 sm:ml-10 cursor-pointer" src="JKT48.png" alt="JKT48" />
          <div className="ml-2 sm:ml-5 flex flex-col items-start">
            <span className="text-2xl text-blackish">JKT48</span>
            <span className="text-base sm:text-lg">
              Official<span className="ml-1">Website</span>
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center w-full sm:w-auto">
          <div className="cursor-pointer mr-5 sm:mr-10 flex items-center">
            <span>My Page</span>
            <span className="mx-1">/</span>
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
