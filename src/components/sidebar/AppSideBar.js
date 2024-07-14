import React, { useState } from "react";

//icons
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

//component
import SideBarList from "./SideBarList";

const AppSideBar = () => {
  const [isToggle, setIsToggle] = useState(true);

  const listItems = [
    { icon: faCoffee },
    { icon: faCoffee },
    { icon: faCoffee },
    { icon: faCoffee },
    { icon: faCoffee },
  ];

  return (
    <div
      className={`fixed h-full left-0 back bg-slate-950 z-40 border-r-2 ${
        isToggle ? "w-20" : "w-0"
      }`}
      style={{ backgroundColor: "#000000", borderColor: "#262626" }}
    >
      <SideBarList listData={listItems} />
    </div>
  );
};

export default AppSideBar;
