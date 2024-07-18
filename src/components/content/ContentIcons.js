import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faBookmark,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ContentIcons = () => {
  const leftIcons = [
    { icon: faHeart, name: "heart", toggle: false, color: "bg-red-800" },
    { icon: faComment, name: "comment", toggle: false, color: "bg-red-800" },
    { icon: faMessage, name: "share", toggle: false, color: "bg-red-800" },
  ];

  const iconSize = "xl";

  const handlonClick = (e) => {
    const { value, name, id } = e.target;

    //TODO id 값을 통해서 ~ 각 아이콘 배경 색 변경해주기
  };

  return (
    <div className="flex justify-between mt-3 text-white">
      <div>
        {leftIcons.map((item, index) => (
          <span key={index}>
            <FontAwesomeIcon
              onClick={handlonClick}
              id={item.name}
              className={`mx-2 cursor-pointer ${item.toggle && item.color}`}
              icon={item.icon}
              size={iconSize}
            />
          </span>
        ))}
      </div>
      <div>
        <span>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBookmark}
            size={iconSize}
          />
        </span>
      </div>
    </div>
  );
};

export default ContentIcons;
