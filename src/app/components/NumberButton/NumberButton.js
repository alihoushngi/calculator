import React from "react";

const NumberButton = ({ number }) => {
  return (
    <button
      type="button"
      value={number}
      className="bg-[#8a8696] text-3xl font-extrabold px-5 text-white flex-grow-0 flex-shrink-0 basis-[30%] rounded-t-lg rounded-b-2xl button-shadow "
    >
      {number}
    </button>
  );
};

export default NumberButton;
