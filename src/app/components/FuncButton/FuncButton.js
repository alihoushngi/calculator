import React from "react";

const FuncButton = ({ func, customClass, onClick }) => {
  return (
    <button
      type="button"
      value={func}
      className={`${customClass} bg-[#291f32] text-xl font-extrabold px-5 text-white flex-grow-0 flex-shrink-0 basis-[30%] rounded-t-lg rounded-b-2xl func-button-shadow active:bg-gray-800`}
      onClick={(e) => onClick(e.target.value)}
    >
      {func}
    </button>
  );
};

export default FuncButton;
