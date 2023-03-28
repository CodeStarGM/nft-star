import React from "react";
import ape from "../../public/ape.png";
import assassin from "../../public/assasin.png";
import eagle from "../../public/eagle.png";
import Image from "next/image";

function Slider() {
  return (
    <div className="space-x-4 px-14 flex items-center justify-start 2xl:h-[40vh] h-[60vh] w-full">
      <div className=" w-[75%] flex items-center space-x-8 ">
        <div className="relative w-72 h-44 gradient_box_slider">
          <div className="absolute bottom-0 ">
            <Image src={ape}></Image>
          </div>
        </div>
        <div className="relative w-72 h-44 gradient_box_slider">
          <div className="absolute -bottom-1 ">
            <Image src={assassin}></Image>
          </div>
        </div>
        <div className="relative w-72 h-44 gradient_box_slider">
          <div className="absolute bottom-0 ">
            <Image src={eagle}></Image>
          </div>
        </div>
        <div className="flex relative items-center justify-center w-20 h-40 gradient_box_slider">
          <div className="z-40 group flex items-center justify-center w-[85%] h-[90%] cursor-pointer slider_button rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
