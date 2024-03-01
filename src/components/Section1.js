import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Section1 = () => {
  return (
    <div className="p-10 mx-0 md:mx-20">
      <h1 className="text-5xl text-left">Best Website builders in the US</h1>
      <div className="h-0.5 bg-slate-200 my-5"></div>
      <div className="flex flex-col md:flex-row justify-between text-slate-600">
        <div className="flex">
          <div className="flex">
            <div>
              <CiCircleCheck size={"25"} />
            </div>
            <p className="pl-3 pr-7">Last Updated - February 22, 2020</p>
          </div>
          <div className="flex">
            <div>
              <FiAlertCircle size={"25"} />
            </div>
            <p className="px-3">Advertising Disclosure</p>
          </div>
        </div>
        <div className="flex">
          <p className="px-3">Top Relevant</p>
          <div>
            <IoIosArrowDown size={"25"} />
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-slate-200 my-5"></div>

      <div className="flex justify-start flex-wrap gap-3">
        <div className=" text-slate-600 bg-white px-5 py-2 rounded-xl text-left min-w-24">
          Tools
        </div>
        <div className=" text-slate-600 bg-white px-5 py-2 rounded-xl text-left min-w-24">
          AWS Builder
        </div>
        <div className=" text-slate-600 bg-white px-5 py-2 rounded-xl text-left min-w-24">
          Start Build
        </div>
        <div className=" text-slate-600 bg-white px-5 py-2 rounded-xl text-left min-w-24">
          Build Supplies
        </div>
        <div className=" text-slate-600 bg-white px-5 py-2 rounded-xl text-left min-w-24">
          Tooling
        </div>
        <div className=" text-slate-600 bg-white px-5 py-2 rounded-xl text-left min-w-24">
          BlueHosting
        </div>
      </div>

      <div className="text-slate-600 text-left py-5">
        <p>
          Home &gt; Hosting for all &gt; Hosting &gt; Hosting6 &gt; Hosting5
        </p>
      </div>
    </div>
  );
};

export default Section1;
