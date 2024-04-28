import React from "react";
import aboutImg from "../assets/quote.jpg";
const GalleQuote = () => {
  return (
    <div className="py-10 text-white bg-[@232325] h-auto flex justify-center">
      <div className="card-form bg-#20242d px-5 py-5 rounded-lg border border-gray-900">
        <div className="flex sm:flex-row flex-col-reverse items-center md-gap-6 gap-12 px-10 max-w-6xl mx auto ">
          <div>
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5">
                  My <span> Quote</span>
                </h3>
                <p className="text-justify leading-7 w-12/12 mx auto text-gray-500">
                  "The best gift is you" encapsulates the notion that one's
                  presence and personal touch hold more value than material
                  possessions. In the realm of information technology, this can
                  be interpreted as emphasizing the importance of human
                  expertise, creativity, and empathy in the design, development,
                  and implementation of technological solutions. While
                  advancements in IT continually introduce new tools and
                  capabilities, it's ultimately the human element—innovation,
                  problem-solving, and understanding user needs—that drives
                  meaningful progress and delivers the most impactful outcomes.
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="w-[400px] h-full mb-5 ">
                <img
                  src={aboutImg}
                  alt=""
                  className="object-cover duration-200 transition-all bg-gray-700 rounded-xl h-[200px] filter grayscale brightness-50 hover:brightness-100 hover:grayscale-0 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleQuote;
