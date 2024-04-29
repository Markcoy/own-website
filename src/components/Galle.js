import React from "react";
import gal1 from "../assets/gal1.png";
import gal2 from "../assets/gal2.png";
import gal3 from "../assets/gal3.png";
import gal4 from "../assets/gal4.png";
import gal5 from "../assets/gal5.png";
import gal6 from "../assets/gal6.png";
import gal7 from "../assets/gal7.png";
import gal8 from "../assets/gal8.png";
import GalleryViewer from "./modal/GalleryViewer";
import GalleQuote from "./GalleQuote";
const Galle = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto">
      <div className="card-form bg-neutral-800 px-5 py-5 rounded-lg border border-gray-900 mt-3">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My
              <span> Gallery</span>
            </h2>
            <p className="text-gray-500 mb-5">These is my Gallery.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-1 lg:gap-1 ml-7 mt-5 mb-5">
          {/* Image 1 */}
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <GalleryViewer
              src={gal1}
              alt="Gallery 1 image"
              description="This was the time when I attended a tournament and amused by the designs and set-up of the place, I explored the Xiomai booth where they showcase their smartphones and other products. I realize that I was hooked by the visual aspect of their promotions and user experience and that inspires me to be more creative of my work and also
              and be vigilant or aware of how other people see my works by putting myself in their shoes. "
            />
          </div>

          {/* Image 2 */}
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <GalleryViewer
              src={gal2}
              alt="Gallery 2 image"
              description="This  were the times when I explore how to use the NodeJS, HTML, CSS, and Javascipt to implement in our thesis website."
            />
          </div>

          {/* Image Viewer for Image 3 */}
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <GalleryViewer
              src={gal3}
              alt="Gallery 3 image"
              description="This is the time when I won 3 awards on a Codelympics govern by the IT Department of DLSU-D. It is my first time to join such contest."
            />
          </div>

          {/* Image 4 */}
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <GalleryViewer
              src={gal7}
              alt="Gallery 4 image"
              description="I joined an the motherhead organization in DLSU-D. I am a Admin and Production Committee. There are many things I learned in doing events where creative mind is very vital, thus this cultivates my prowess for my creative side. "
            />
          </div>

          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg lg:mt-7 sm:mt-0 ">
            <GalleryViewer
              src={gal5}
              alt="Gallery 5 image "
              description="I also joined the Bazaar at DLSU-D where I showcase my arts and products by selling pins and stickers, it makes me happy that other people were satisfied with the designs that I did."
            />
          </div>
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg lg:mt-7 sm:mt-0 ">
            <GalleryViewer
              src={gal6}
              alt="Gallery 6 image"
              description="I built a bond and family with my orgmates."
            />
          </div>
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg lg:mt-7 sm:mt-0 ">
            <GalleryViewer
              src={gal8}
              alt="Gallery 7 image"
              description="This is my first publication material that I did using canva and adobe photoshop, I did this when I was a Creatives Executive Committee at Council of Student Organization in DLSU-D."
            />
          </div>
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg lg:mt-7 sm:mt-0 ">
            <GalleryViewer
              src={gal4}
              alt="Gallery 8 image"
              description="I created my first website with the help and guide of my OJT company- Hacktiv Inc. Colab. I use ReactJS and tailwindCSS."
            />
          </div>
        </div>
      </div>

      <GalleQuote />
    </div>
  );
};

export default Galle;
