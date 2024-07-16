import React, { useEffect, useState } from "react";
//router
import { useNavigate } from "react-router-dom";

import AppHeader from "../components/header/AppHeader";
import AppSideBar from "../components/sidebar/AppSideBar";
import MainContent from "../page/main/MainContent";

const DefaultLayer = () => {
  return (
    <>
      <AppSideBar />
      <div className="ml-20">
        <AppHeader />
        <MainContent />
      </div>
    </>
  );
};

export default DefaultLayer;
