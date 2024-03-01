import React from 'react'
import img1 from "../assests/img1.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Card2 = () => {
  return (
    <div>
        <div className=" mx-10 md:mx-28 bg-white relative rounded-xl pb-12">
        <div className="absolute -left-6 bg-white border border-slate-200 w-11 h-11 mt-12 rounded-full text-slate-600  text-center text-3xl">
          4
        </div>
        <div className=" mx-0 md:mx-10 flex flex-col md:flex-row justify-evenly ">
          <div className=" w-56 h-44 my-auto mt-20">
            <img className="w-full h-full" src={img1} alt="image1" />
            <div className="text-slate-600">CDK</div>
          </div>
          <div className="text-slate-600 text-left mx-0 mx-md-10 px-6 mt-5">
            <p>
              <span className="font-bold">CDK Resposive Builder:</span>
              An extensive library of widgets and apps, and detailed
              step-by-step guides
            </p>
            <div className="bg-sky-50 w-20 p-1 text-sky-800">26% Off</div>
            <div>
              <p className="text-slate-800 font-bold py-3">Main Highlights</p>
              <div className="ml-5 bg-red-50 rounded-lg">
                <div className="ml-5 pt-3 flex justify-start items-center gap-2">
                  <div className="bg-white text-sky-400 rounded-md py-1 px-2 my-1">
                    9.9
                  </div>
                  <div>Building Responsive</div>
                </div>
                <div className="ml-5 flex justify-start items-center gap-2">
                  <div className="bg-white text-sky-400 rounded-md py-1 px-2 my-1">
                    8.9
                  </div>
                  <div>Cool</div>
                </div>
                <div className="ml-5 pb-3 flex justify-start items-center gap-2">
                  <div className="bg-white text-sky-400 rounded-md py-1 px-2 my-1">
                    8.9
                  </div>
                  <div>Docs</div>
                </div>
              </div>
              <div>
                <p className=" py-3 ">Why we love it</p>
                <div className="flex gap-2 justify-start items-center text-sm">
                  <div className="text-sky-800 bg-sky-50 p-1 rounded-full">
                    <FaCheck />
                  </div>
                  <p>Documentation</p>
                </div>
                <div className="flex gap-2 justify-start items-center text-sm ">
                  <div className="text-sky-800 bg-sky-50 p-1 rounded-full">
                    <FaCheck />
                  </div>
                  <p>Easy Use</p>
                </div>
                <div className="flex gap-2 justify-start items-center text-sm">
                  <div className="text-sky-800 bg-sky-50 p-1 rounded-full">
                    <FaCheck />
                  </div>
                  <p>Out Of Box</p>
                </div>
              </div>
            </div>
            <div className="text-sky-400 pt-4 flex justify-start gap-1 items-center">
              <button>Show More</button>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="flex flex-col justify-between text-center ">
            <div className="w-32 bg-sky-50 p-5 rounded-b-lg text-slate-200 relative mx-auto">
              <div className="absolute right-5 top-1">
                <FiAlertCircle />
              </div>

              <div className="text-sky-800 text-3xl">9.1</div>
              <div className="text-sky-800">Very Good </div>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
            <button className=" mx-auto mx-md-0 w-48 bg-sky-600 rounded-xl text-white py-2 mt-5">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2
