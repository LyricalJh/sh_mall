import React from "react";

import { useNavigate } from "react-router-dom";

const withHeader = (Component) => {
  return ({ ...rest }) => {
    const navigate = useNavigate();

    return (
      <div
        className="fixed w-full flex items-center justify-between h-20  px-5 border-b-2 z-50"
        style={{ borderColor: "#262626", background: "#000000" }}
      >
        <h1
          className="cursor-pointer font-[GowunBatang] text-[#F5F5F5] text-2xl whitespace-nowrap"
          onClick={() => navigate("/")}
        >
          오늘의 시톡
        </h1>
        <Component {...rest} />
      </div>
    );
  };
};

export default withHeader;
