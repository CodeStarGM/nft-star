import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center  w-[100vw] h-auto py-2 pt-14">
        <div className="flex items-center justify-between w-[70%] h-auto py-6 px-2 ">
          <div>
            <ul className="text-base text-white  flex items-center space-x-8">
              <li className="cursor-pointer hover:underline hover:text-[#14D9E5]">
                Home
              </li>
              <li className="cursor-pointer hover:underline hover:text-[#14D9E5]">
                Discord
              </li>
              <li className="cursor-pointer hover:underline hover:text-[#14D9E5]">
                Code
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-2">
            <Image width={40} height={40} src={logo} alt="logo"></Image>
            <h1 className="text-yellow-500 text-xl font-bold">NFT STAR</h1>
          </div>

          <div>
            <ul className="text-base text-white flex items-center space-x-8">
              <li className="cursor-pointer hover:underline hover:text-[#14D9E5]">
                NFT
              </li>
              <li className="cursor-pointer hover:underline hover:text-[#14D9E5]">
                About
              </li>
              <li className="cursor-pointer hover:underline hover:text-[#14D9E5]">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
