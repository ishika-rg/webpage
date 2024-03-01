import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="px-28 py-20 bg-slate-900 text-left text-white flex flex-col justify-center md:flex-row md:justify-between items-start">
      <div>
        <h1>CATEGORIES</h1>
        <div className="text-slate-400 py-5">
          <p className="pb-3">Web Builder</p>
          <p className="pb-3">Hosting</p>
          <p className="pb-3">Data Center</p>
          <p className="pb-3">Robotic-Automation</p>
        </div>
      </div>
      <div>
        <h1>CONTACT</h1>
        <div className="text-slate-400 py-5">
          <p className="pb-3">Contact</p>
          <p className="pb-3">Privacy Policy</p>
          <p className="pb-3">Terms Of Service</p>
          <p className="pb-3">Category</p>
          <p className="pb-3">About</p>
        </div>
      </div>

      <div className="text-slate-400 flex items-center my-auto ">
        <h1>United States</h1>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Footer;
