import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faBookmark,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ContentIcons = () => {
  const leftIcons = [
    { icon: faHeart, name: "heart" },
    { icon: faComment, name: "comment" },
    { icon: faMessage, name: "share" },
  ];

  const iconSize = "xl";

  const handlonClick = (e) => {
    const { value, name, id } = e.target;
    //TODO id 값을 통해서 ~ 각 아이콘 배경 색 변경해주기
  };
  return (
    <div className="flex justify-between text-white mt-3">
      <div>
        {leftIcons.map((item, index) => (
          <span key={index}>
            <FontAwesomeIcon
              onClick={handlonClick}
              id={item.name}
              className="me-2 cursor-pointer"
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
