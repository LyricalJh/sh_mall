import React, { useEffect, useState } from "react";
//router
import { useNavigate } from "react-router-dom";

import AppHeaderDropdown from "../components/header/AppHeaderDropdown";
import AppHeader from "../components/AppHeader";
import AppSideBar from "../components/sidebar/AppSideBar";
import MainImage from "../page/main/MainImage";
import MainContent from "../page/main/MainContent";

const DefaultLayer = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppSideBar />
      <div className="ml-20">
        <AppHeader />
        {/* <MainImage /> */}
        <MainContent />
      </div>
    </>
  );
};

export default DefaultLayer;
