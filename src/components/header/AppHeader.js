import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//componemt
import SearchInput from "../input/SearchInput";
const AppHeader = () => {
  return (
    <>
      <div
        className="flex items-center justify-between h-20  px-5 border-b-2"
        style={{ borderColor: "#262626", background: "#000000" }}
      >
        <h1 className="font-[GowunBatang] text-[#F5F5F5] text-2xl whitespace-nowrap">
          오늘의 시톡
        </h1>
        <div className="flex items-center">
          <SearchInput />
          <span className="ms-4">
            <FontAwesomeIcon
              className="text-[#F5F5F5]"
              size={"lg"}
              icon={faHeart}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
