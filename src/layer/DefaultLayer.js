import React, { useEffect, useState, useRef } from "react";
//router
import { useNavigate } from "react-router-dom";

import AppHeader from "../components/header/AppHeader";
import AppSideBar from "../components/sidebar/AppSideBar";
import SearchSideBar from "../components/sidebar/SearchSideBar";
import AppContent from "../page/main/AppContent";
import AppFooter from "../components/footer/AppFooter";

const DefaultLayer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const appBodyRef = useRef(null);

  const handleClickOnSearch = () => {
    setIsOpen((pre) => !pre);
  };

  const handleClickOnIcon = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (appBodyRef.current && appBodyRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div className="hidden lg:block">
        <AppSideBar
          handleClickOnSearch={handleClickOnSearch}
          handleClickOnIcon={handleClickOnIcon}
        />
        <SearchSideBar isOpen={isOpen} onClose={setIsOpen} />
      </div>
      <div ref={appBodyRef} className="lg:ml-20">
        <div className="lg:hidden">
          <AppHeader />
        </div>

        <div className="lg:ml-20">
          <AppContent />
        </div>

        <div className="lg:hidden">
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayer;
