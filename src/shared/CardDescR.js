import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking

const CardDescR = ({ title, image, description }) => {
  return (
    <div className="py-2 text-white bg-[@232325] h-auto filter grayscale hover:grayscale-0 duration-500 transition-all flex justify-center">
      <div className="card-form bg-gray-800 px-5 py-5 h-[250px] flex items-center rounded-lg border border-gray-700">
        <div className="flex sm:flex-row flex-col-reverse items-center md-gap-6 gap-12 px-10 max-w-6xl mx auto ">
          <div>
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5 text-right">
                  <span>{title}</span>
                </h3>
                <p className="text-justify leading-7 w-12/12 mx auto">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[150px] h-full">
              <img
                src={image}
                alt=""
                className="object-cover bg-transparent rounded-xl h-[150px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for type checking
CardDescR.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardDescR;
