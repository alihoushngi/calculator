import Image from "next/image";
import React from "react";
import Logo from "../../../../public/static/images/Logo.png";

const TopSection = () => {
  return (
    <div className="flex justify-between items-center w-full p-3">
      <div>
        <span className="text-white uppercase font-extrabold text-3xl">
          casio
        </span>
      </div>
      <div className="flex justify-center items-center gap-2 uppercase">
        <div>
          <span className="text-white text-[10px]">DJ-20L</span>
        </div>
        <div className="flex relative gap-[1px] justify-center items-center">
          <div className="w-8 h-8 bg-orange-950" />
          <div className="w-8 h-8 bg-orange-950" />
          <div className="w-8 h-8 bg-orange-950" />
          <div className="w-8 h-8 bg-orange-950" />
          <span className="absolute text-white text-[10px]">two way power</span>
        </div>
        <div className="flex flex-col items-center justify-center uppercase text-[10px]">
          <span className="text-sky-700">12</span>
          <span className="bg-sky-700 rounded-md p-1 text-white text-[8px]">
            digits
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
