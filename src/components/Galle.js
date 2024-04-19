import React from "react";
import proj1 from "../assets/p1.png";
import About from "./About";
import GalleryViewer from "./modal/GalleryViewer";
const Galle = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl text-white">
            My
            <span> Gallery</span>
          </h2>
          <p className="text-gray-500">These is my Gallery.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-1 lg:gap-1">
        {/* Image 1 */}
        <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
          <GalleryViewer
            src={proj1}
            alt="Project 3 image"
            description="This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image.This is a description of the sample image."
          />
        </div>

        {/* Image 2 */}
        <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
          <GalleryViewer src={proj1} alt="Project 3 image" />
        </div>

        {/* Image Viewer for Image 3 */}
        <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
          <GalleryViewer src={proj1} alt="Project 3 image" />
        </div>

        {/* Image 4 */}
        <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
          <GalleryViewer src={proj1} alt="Project 3 image" />
        </div>

        <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
          <GalleryViewer src={proj1} alt="Project 3 image" />
        </div>
      </div>

      <div className="border-b border-gray-400 py-10"></div>
      <About />
    </div>
  );
};

export default Galle;
