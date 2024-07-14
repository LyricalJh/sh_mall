import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ icon, name }) => {
  return (
    <div
      className="flex justify-center items-center cursor-pointer text-white"
      style={{ marginTop: "60px" }}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SideBarItem;
