import React from "react";
import proj1 from "../assets/pr1.png";
import proj2 from "../assets/pr2.png";
import proj3 from "../assets/pr3.png";
import proj4 from "../assets/pr4.png";
import Icons from "../shared/Icons";

const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl text-white">
            My
            <span> Projects</span>
          </h2>
          <p className="text-gray-500">These are my projects.</p>
        </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-4">
        
          <a
            href="/"
            className="group  h-48 overflow-hidden rounded-lg shadow-lg md:h-80"
          >
            
            <img
              src={proj1}
              loading="lazy"
              alt=""
              className="  h-full w-full
              object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
         
         
       
          
          <a
            href="/"
            className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={proj4}
              loading="lazy"
              alt=""
              className="  h-full w-full
              object-cover object-center transition duration-200 group-hover:scale-110"
            />
           

            
          </a>
          <a
            href="/"
            className="group  h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={proj3}
              loading="lazy"
              alt=""
              className="  h-full w-full
              object-cover object-center transition duration-200 group-hover:scale-110"
            />

            
          </a>

          <a
            href="/"
            className="group  h-48 overflow-hidden rounded-lg shadow-lg md:h-80"
          >
            <img
              src={proj2}
              loading="lazy"
              alt=""
              className="  h-full w-full
              object-cover object-center transition duration-200 group-hover:scale-110"
            />

            
          </a>



       
      </div>
      <div className="border-b border-gray-400 py-10 "></div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-col gap-4 mt-10">
          <h2 className="text-2xl lg:text-3xl text-white">
            Used
            <span> Technologies</span>
          </h2>
          
        </div>
        </div>
      <Icons/>
      
    </div>
  );
};

export default Work;
