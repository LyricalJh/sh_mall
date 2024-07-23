import React from "react";

const Btn = ({ name }) => {
  return (
    <div className="bg-[#363636] rounded-lg cursor-pointer text-white px-4 py-1">
      {name}
    </div>
  );
};

export default Btn;
