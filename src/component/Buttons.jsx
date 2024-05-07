import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Buttons = ({ obj }) => {
  const words = obj.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 6 < 0 ? words.length - Math.abs(prevIndex - 6) : prevIndex - 6
    );
    // (prevIndex === 0 ? words.length -1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 6 >= words.length
        ? prevIndex + 6 - words.length
        : prevIndex + 6
    );
  };

  return (
    <div className="flex justify-between items-center  md:mx-5">
      {currentIndex !== 0 && (
        <GrLinkPrevious
          className="text-[2rem] cursor-pointer"
          onClick={handlePrevious}
        />
      )}

      <div className="m-3 gap-5 flex overflow-x-hidden  md:mx-14">
        {words.map((word, index) => (
          <button
            key={index}
            style={{
              display:
                index >= currentIndex && index < currentIndex + 10
                  ? "block"
                  : "none",
            }}
            className={` p-1 text-xs md:p-2 md:px-3 bg-slate-300 text-gray-600 hover:bg-gray-400 italic rounded-2xl ${
              index === 0 ? "bg-red-500 text-white" : ""
            }`}
          >
            {word}
          </button>
        ))}
      </div>
      <GrFormNextLink
        className="text-[3rem] cursor-pointer "
        onClick={handleNext}
      />
    </div>
  );
};

export default Buttons;
