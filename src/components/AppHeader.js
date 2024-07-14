import React from "react";

//componemt
import SearchInput from "./input/SearchInput";
const AppHeader = () => {
  return (
    <>
      <div
        className="flex items-center justify-between h-20  px-5 border-b-2"
        style={{ borderColor: "#262626", background: "#000000" }}
      >
        <h1 className="font-[GowunBatang] text-white text-2xl whitespace-nowrap">
          오늘의 시톡
        </h1>
        <SearchInput />
      </div>
    </>
  );
};

export default AppHeader;
