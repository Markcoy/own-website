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
          <div className="w-[125px] h-[125px]">
          <a href="https://react.dev/" target="_blank">
              <img
                src={reactImg}
                alt=""
                className="object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-50"
              />
              </a>
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="w-[125px] h-[125px]">
              <a href="https://react.dev/" target="_blank">
              <img
                src={javaImg}
                alt=""
                className="object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-50"
              />
              </a>
            </div>

          </div>
          
        </div>
        <div>
          <div className="p-2">
            <div className="w-[125px] h-[125px]">
            <a href="https://react.dev/" target="_blank">
              <img
                src={tailImg}
                alt=""
                className="object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-50"
              />
              </a>
            </div>

          </div>
          
        </div>
        <div>
          <div className="p-2">
            <div className="w-[125px] h-[125px]">
            <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
              <img
                src={htmlImg}
                alt=""
                className="object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-50"
              />
              </a>
            </div>

          </div>
          
        </div>
        <div>
          <div className="p-2">
            <div className="w-[125px] h-[125px]">
            <a href="https://react.dev/" target="_blank">
              <img
                src={cssImg}
                alt=""
                className="object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-50"
              />
              </a>
            </div>

          </div>
          
        </div>
        <div>
          <div className="p-2">
            <div className="w-[125px] h-[125px]">
            <a href="https://react.dev/" target="_blank">
              <img
                src={nodeImg}
                alt=""
                className="object-contain bg-transparent rounded-xl w-full h-full transition-transform duration-300 hover:scale-50"
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
