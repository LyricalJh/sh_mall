import React from "react";

const DefaultInput = ({ placeholder = "작성해주세요.", type = "text" }) => {
  return (
    <input
      className="rounded bg-[#262626] w-full text-[#F5F5F5] px-4 py-2 focus:outline-none"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default DefaultInput;
