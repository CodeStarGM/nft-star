import React from "react";
import bubble from "../../public/bubble.png";
import sale from "../../public/Sale.png";
import kot from "../../public/Kot.png";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="relative h-auto py-4 w-[100vw]">
        <div className="absolute -right-[2%] -top-[20%] ">
          <Image src={kot} width={324} height={324}></Image>
        </div>
        <div className="pl-[22%] space-x-8 flex items-center  w-[100%] h-auto ">
          <div className="w-[60px] h-[10px] gradient_box"></div>
          <h1 className="text-8xl font-black gradient_text main_heading ">
            NFT MARKET
          </h1>
        </div>
        <div className="relative pl-[11%] flex items-center w-[100%] h-auto">
          <div className="absolute left-[7%] bottom-[25%]">
            <Image src={bubble} width={140} height={140}></Image>
          </div>
          <h1 className="text-7xl font-semibold text-white">BROWSE COOLNFTS</h1>
          <div className="absolute right-[20%] ">
            <Image src={sale} width={300} height={300}></Image>
          </div>
        </div>
        <div className="pl-[11%] space-x-8 flex  justify-between items-end  w-[100%] h-auto py-6 ">
          <div>
            <button className="text-white font-semibold px-10 rounded-full py-4 truncate gradient_button">
              Купить NFT
            </button>
          </div>
          <div>
            <button className="hover:bg-[#14D9E5] hover:text-white text-[#14D9E5] font-semibold px-10 rounded-full py-3 truncate border-[3px] border-[#14D9E5]">
              Галлерея
            </button>
          </div>
          <div>
            <p className="w-[70%] text-sm text-[#14D9E5]">
              NFT, или невзаимозаменяемый токен, — это единица учета, с помощью
              которой создается цифровой слепок для любого уникального предмета.
              Среди них могут быть: картины, фотографии, видео, музыка, гифки.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
