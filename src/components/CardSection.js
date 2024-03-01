import React from "react";
import img1 from "../assests/img1.png";
import Card2 from './Card2.js'
import { CardContent } from "./CardContent";
import { IoIosArrowDown } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const CardSection = () => {
  const data = CardContent;
  const totalStars = 5;

  // console.log("card content data is : ", data);

  return (
    <>
      {data.map((ele, i) => (
        <>
          <div
            key={i}
            className=" mx-10 md:mx-28 bg-white relative rounded-xl pb-12 my-10"
          >
            {ele.tag ? (
              <div className=" absolute -top-6 bg-orange-500 text-white w-32 rounded-r-lg flex justify-start items-center gap-1 py-3 px-2">
                {ele.icon}
                <span>{ele.tagline}</span>
              </div>
            ) : (
              ""
            )}

            <div key = {i} className="absolute -left-6 bg-white border border-slate-200 w-11 h-11 mt-12 rounded-full text-slate-600  text-center text-3xl">
              {ele.id}
            </div>
            <div className="flex flex-col md:flex-row">
            <div className="mx-5 md:mx-10 flex flex-col md:flex-row justify-start ">
              <div className="w-7/12 h-44 my-auto mt-20">
                <img className="w-full h-full" src={img1} alt="image1" />
                <div className="text-slate-600">Builder 1</div>
              </div>
              <div className="text-slate-600 text-left mx-0 mx-md-10 px-3 mt-10 mt-md-5">
                <p>
                  <span className="font-bold">{ele.heading1}</span>
                  {ele.heading2}
                </p>
                <div>
                  <p className="text-slate-800 font-bold py-3">
                    Main Highlights
                  </p>
                  <p className="pl-5">{ele.desc}</p>
                </div>
                <div className="text-sky-400 pt-4 flex justify-start gap-1 items-center">
                  <button>Show More</button>
                  <IoIosArrowDown />
                </div>
              </div>
            </div>

              <div className="flex flex-col justify-between text-center ">
                <div className="w-32 bg-sky-50 p-5 rounded-b-lg text-slate-200 relative mx-auto">
                  <div className="absolute right-5 top-1">
                    <FiAlertCircle />
                  </div>

                  <div className="text-sky-800 text-3xl">{ele.rating}</div>
                  <div className="text-sky-800">{ele.remark} </div>
                  <div className="flex text-amber-400">
                    {
                      [...new Array(totalStars)].map((arr, index) => {
                        return index < ele.star ? <FaStar /> : <FaRegStar />;
                      })
                    }
                    
                  </div>
                </div>
                <button className="w-48 mx-auto mx-md-0 max-h-10 bg-sky-600 rounded-xl text-white py-2 mt-5">
                  View
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
          {/* **********************NEW CARD SECTION******************************************  */}

          <Card2 /> 
    </>
  );
};

export default CardSection;
