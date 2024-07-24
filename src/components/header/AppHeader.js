import React from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//componemt
import SearchInput from "../input/SearchInput";

//hoc
import withHeader from "../hoc/withHeader";

const HeaderInput = () => {
  return (
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
  );
};

const AppHeaderWithInput = withHeader(HeaderInput);

const AppHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return <>{isHome && <AppHeaderWithInput />}</>;
};

export default AppHeader;
