import React, { useState } from "react";
import SearchSideBar from "./SearchSideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ icon, name, handleClick, url }) => {
  return (
    <div
      className="flex justify-start ms-10 items-center cursor-pointer text-[#F5F5F5]"
      style={{ marginTop: "60px" }}
      onClick={() => handleClick(url)}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: "1.2em" }} />
      <div className="font-[GowunBatang] ms-4">{name}</div>
    </div>
  );
};

export default SideBarItem;
