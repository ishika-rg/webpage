import React from "react";
import img1 from "../assests/img1.png";

const DealCard = () => {
  return (
    <div className="text-slate-600 bg-white rounded-xl my-6 p-3">
      <div>
        <img className="mx-auto mt-4 mb-10" src={img1} alt="image_1" />
        <div className="flex gap-2">
          <div className="bg-sky-50 w-20 p-1 text-sky-800 rounded-md">
            20% Off
          </div>
          <div className="bg-sky-50 p-1 text-sky-800 rounded-md">
            Limited Time
          </div>
        </div>
        <div className="text-slate-600 font-bold py-3">Webbuilder 1</div>
        <p>Computer Modern clasic with wix support</p>
        <div className="flex gap-2">
          <p className="text-xl">$39.96 </p>
          <p className="text-slate-300 text-xs pt-2">$49.96 </p>
          <p className="text-red-500 text-xs pt-2">(20% Off) </p>
        </div>

        <button className="w-full bg-sky-600 rounded-xl text-white py-2 mt-5">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default DealCard;
