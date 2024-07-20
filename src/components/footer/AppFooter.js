import React from "react";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faCompass,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const AppFooter = () => {
  //TODO React router dom 라이브러리로 해당 url 이동
  const navigate = useNavigate();
  const footerItems = [
    { icon: faHome, url: "" },
    { icon: faCompass, url: "" },
    { icon: faComment, url: "" },
    { icon: faUser, url: "" },
  ];

  return (
    <div className="fixed bottom-0 w-full flex justify-around items-center bg-[#000000] text-white p-4 border-t border-[#262626]">
      {footerItems.map((item, index) => (
        <div
          className="cursor-pointer"
          key={index}
          onClick={() => navigate(item.url)}
        >
          <FontAwesomeIcon icon={item.icon} size="lg" />
        </div>
      ))}
    </div>
  );
};

export default AppFooter;
