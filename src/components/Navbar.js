import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-slate-900 h-12 flex justify-center items-center  ">
      <div className="relative text-gray-600 ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <CiSearch />
        </span>
        <input
          type="search"
          name="q"
          className="py-1 text-sm  bg-white-900 rounded-md pl-10  w-28 md:w-36 "
          autoComplete="off"
        />
      </div>

      <div className="flex  items-center text-slate-200 pl-4 sm:pl-8 px-md-10 gap-2 sm:gap-4">
        <div className="">Categories</div>
        <div className="">Website Builders</div>
        <div className="">Today's deals</div>
      </div>
    </div>
  );
};

export default Navbar;
