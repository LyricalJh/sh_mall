import React, { useState } from "react";

//icons
import {
  faUser,
  faHome,
  faCompass,
  faComment,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

//component
import SearchSideBar from "./SearchSideBar";
import SideBarList from "./SideBarList";

const AppSideBar = ({ handleClickOnSearch, handleClickOnIcon }) => {
  const [isToggle, setIsToggle] = useState(true);

  const listItems = [
    { icon: faHome, name: "홈", url: "/", handleClick: handleClickOnIcon },
    {
      icon: faMagnifyingGlass,
      name: "검색",
      url: "/search",
      handleClick: handleClickOnSearch,
    },
    {
      icon: faCompass,
      name: "탐색 탭",
      url: "/explore",
      handleClick: handleClickOnIcon,
    },
    {
      icon: faComment,
      name: "메시지",
      url: "message",
      handleClick: handleClickOnIcon,
    },
    {
      icon: faUser,
      name: "프로필",
      url: "/profile",
      handleClick: handleClickOnIcon,
    },
  ];

  return (
    <div
      className={`fixed h-full left-0 back bg-[#000000] border-[#262626] z-40 border-r-2 ${
        isToggle ? "w-40" : "w-0"
      }`}
    >
      <SideBarList listData={listItems} />
    </div>
  );
};

export default AppSideBar;
