"use client";
import React from "react";

const NumberButton = ({ number, onClick }) => {
  return (
    <button
      type="button"
      value={number}
      className="bg-[#8a8696] text-3xl font-extrabold px-5 text-white flex-grow-0 flex-shrink-0 basis-[30%] rounded-t-lg rounded-b-2xl button-shadow active:bg-slate-500"
      onClick={(e) => onClick(e.target.value)}
    >
      {number}
    </button>
  );
};

export default NumberButton;
