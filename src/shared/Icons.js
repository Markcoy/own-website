import React from "react";
import reactImg from "../assets/react.png";
import tailImg from "../assets/tailwind.png";
import javaImg from "../assets/javascript.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import nodeImg from "../assets/node.png";
const About = () => {
  return (
    <div className="py-10 text-white bg-[@232325] h-auto flex justify-center">
      <div className="flex sm:flex-row flex-col-reverse items-center md-gap-6 gap-12 px-10 max-w-6xl mx auto ">
        <div>
          <div className="w-[100px] h-[100px]">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reactImg}
                alt=""
                className="filter grayscale hover:grayscale-0 object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-125 hover:opacity-70"
              />
            </a>
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="w-[100px] h-[100px]">
              <a
                href="https://www.w3schools.com/js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={javaImg}
                  alt=""
                  className=" filter grayscale object-contain hover:grayscale-0 bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-125  hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="w-[100px] h-[100px]">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tailImg}
                  alt=""
                  className=" fliter grayscale hover:grayscale-0 object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-125  hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="w-[100px] h-[100px]">
              <a
                href="https://www.w3schools.com/html/html_intro.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={htmlImg}
                  alt=""
                  className="filter grayscale hover:grayscale-0 object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-125  hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="w-[100px] h-[100px]">
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cssImg}
                  alt=""
                  className="filter grayscale hover:grayscale-0 object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-125  hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="w-[100px] h-[100px]">
              <a
                href="https://nodejs.org/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={nodeImg}
                  alt=""
                  className="filter grayscale hover:grayscale-0 object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-125  hover:opacity-70 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
