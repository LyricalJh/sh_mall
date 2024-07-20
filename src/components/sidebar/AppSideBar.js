import React, { useState, forwardRef } from "react";

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

const AppSideBar = forwardRef(({ clickOnSearch }, appSideRef) => {
  const [isToggle, setIsToggle] = useState(true);

  const listItems = [
    { icon: faHome, name: "홈", url: "/", handleClick: clickOnSearch },
    {
      icon: faMagnifyingGlass,
      name: "검색",
      url: "/search",
      handleClick: clickOnSearch,
    },
    {
      icon: faCompass,
      name: "탐색 탭",
      url: "/explore",
      handleClick: clickOnSearch,
    },
    {
      icon: faComment,
      name: "메시지",
      url: "message",
      handleClick: clickOnSearch,
    },
    {
      icon: faUser,
      name: "프로필",
      url: "/profile",
      handleClick: clickOnSearch,
    },
  ];

  return (
    <div
      ref={appSideRef}
      className={`fixed h-full left-0 back bg-[#000000] border-[#262626] z-40 border-r-2 ${
        isToggle ? "w-40" : "w-0"
      }`}
    >
      <SideBarList listData={listItems} />
    </div>
  );
});

export default AppSideBar;
