import React, { useEffect, useState, useRef } from "react";
//router
import { useNavigate } from "react-router-dom";

import AppHeader from "../components/header/AppHeader";
import AppSideBar from "../components/sidebar/AppSideBar";
import SearchSideBar from "../components/sidebar/SearchSideBar";
import MainContent from "../page/main/MainContent";
import AppFooter from "../components/footer/AppFooter";

const DefaultLayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const appSideRef = useRef(null);
  const searhSideRef = useRef(null);

  const clickOnSearch = () => {
    setIsOpen((pre) => !pre);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searhSideRef.current &&
        !searhSideRef.current.contains(event.target) &&
        appSideRef.current &&
        !appSideRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="hidden lg:block">
        <AppSideBar clickOnSearch={clickOnSearch} appSideRef={appSideRef} />
        <SearchSideBar
          isOpen={isOpen}
          onClose={setIsOpen}
          searhSideRef={searhSideRef}
        />
      </div>
      <div className="lg:ml-20">
        <div className="lg:hidden">
          <AppHeader />
        </div>
        <MainContent />
        <div className="lg:hidden">
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayer;
