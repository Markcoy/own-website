import React from "react";
import proj1 from "../assets/pr1.png";
import proj2 from "../assets/pr2.png";
import proj3 from "../assets/pr3.png";
import proj4 from "../assets/pr6.png";
import proj5 from "../assets/pr5.png";
import proj6 from "../assets/pr7.png";
import Icons from "../shared/Icons";
import proj7 from "../assets/pr8.png";
import DescModal from "./modal/DescModal";

const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto">
      <div className="card-form bg-neutral-800 px-5 py-5 rounded-lg border border-gray-900">
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
          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80  ">
            <DescModal
              imageSrc={proj1}
              downloadUrl="https://drive.google.com/uc?export=download&id=1tt-jeClGy0LXz6KeLL-wgPRNAPSBFh0o
              "
              description="This project is the result of my first experimentation with HTML, JavaScript, and CSS in my early web development education. It was an introductory exercise designed to calculate each student's tuition fee discount according to the number of units they were enrolled in. Gathering relevant student data, such as Student ID, Name, College, Course, and the all-important metric—the number of units enrolled in, each of which costs PHP2000—are the fundamental elements of this operation. 
              This was a basic project I performed in my first year of college, and it is an example of a basic yet easy exercise that didn't require the use of a database. This exercise, which was created to improve my front-end development abilities, emphasizes the usefulness of using HTML for content organization, JavaScript for dynamic functionality, and CSS for element styling. It serves as evidence of my preliminary efforts in the field of web development and paves the way for more intricate projects and in-depth research.
           "
            />
          </div>

          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <DescModal
              imageSrc={proj4}
              downloadUrl="https://drive.google.com/uc?export=download&id=1D2R0QpZDS6khWbMiHiRx3hiILDZGTtZK
              "
              description="sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
           "
            />
          </div>
          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <DescModal
              imageSrc={proj3}
              downloadUrl="https://drive.google.com/uc?export=download&id=1eob1YajkToogw15mmpjg8pAzWo-5PItV
              "
              description="ahbsdjhsdakjasd
          "
            />
          </div>

          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <DescModal
              imageSrc={proj2}
              downloadUrl="https://drive.google.com/uc?export=download&id=1wW303rriTEqDyg89PNAPGPfC9k9wNsv9
              "
              description="sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
          "
            />
          </div>
          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <DescModal
              imageSrc={proj7}
              downloadUrl="https://drive.google.com/uc?export=download&id=1jhejEr5K4BK7ll8JUVsPTe9ZVl8lDqOY
              "
              description="sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
          "
            />
          </div>

          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <DescModal
              imageSrc={proj5}
              downloadUrl="https://drive.google.com/uc?export=download&id=1FED_gB1Q7Kc2ma8Mw6XIfhccBqWDZYpw
              "
              description="sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
              sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
           "
            />
          </div>
          <div className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-3 md:h-80">
            <DescModal
              imageSrc={proj6}
              downloadUrl="https://drive.google.com/drive/folders/1irPmyDhomaiebUovf_ZgYzov034wZXD6?usp=drive_link"
              description="sdfsdgfsdgdgdgdgdgdgdgdgdgdgsdfgggsdgsdgsdgsdgsdgsdggdssdggdssdgsdgsdgsdgdsg
          "
            />
          </div>
        </div>
      </div>

      <div className="card-form bg-neutral-800 px-5 py-5 rounded-lg border border-gray-900 mt-3">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-2xl lg:text-3xl text-white">
              Used
              <span> Technologies</span>
            </h2>
          </div>
        </div>

        <Icons />
      </div>
    </div>
  );
};

export default Work;
