import React, { useEffect, useState } from "react";
//router
import { useNavigate } from "react-router-dom";

import AppHeader from "../components/header/AppHeader";
import AppSideBar from "../components/sidebar/AppSideBar";
import MainContent from "../page/main/MainContent";
import AppFooter from "../components/footer/AppFooter";

const DefaultLayer = () => {
  return (
    <>
      <div className="hidden lg:block">
        <AppSideBar />
      </div>
      <div className="lg:ml-20">
        <AppHeader />
        <MainContent />
        <div className="lg:hidden">
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayer;
