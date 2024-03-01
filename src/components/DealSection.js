import React from "react";
import DealCard from "./DealCard";

const DealSection = () => {
  return (
    <div className="p-10 mx-0 md:mx-20">
      <h1 className="text-3xl text-left mt-3">
        Related deals you might like for
      </h1>
      <div className="flex justify-between flex-wrap">
        <DealCard />
        <DealCard />
        <DealCard />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center my-10">
        <div>
          <h1 className="text-3xl text-slate-600 text-left mt-3">
            Sign up and get exclusive special deals
          </h1>
        </div>
        <div className="flex">
          <input className=" max-h-12 min-w-28 border border-slate-300 rounded-l-xl py-2 pl-9 pr-3"></input>
          <button className="min-w-24 max-h-12 bg-sky-600 rounded-r-xl text-white py-2 px-3 ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
