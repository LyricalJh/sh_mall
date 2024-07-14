import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faBookmark,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ContentSub = ({ size, like, subMessage, userName, comments }) => {
  const iconSize = "xl";
  const [isSubShow, setIsSubShow] = useState(false);

  //더보기 조건
  const subShowCondition = !isSubShow && subMessage;

  const leftIcons = [
    { icon: faHeart, name: "heart" },
    { icon: faComment, name: "comment" },
    { icon: faMessage, name: "share" },
  ];

  const handlonClick = (e) => {
    const { value, name, id } = e.target;
    //TODO id 값을 통해서 ~ 각 아이콘 배경 색 변경해주기
  };

  return (
    <div className="flex flex-col" style={{ width: size }}>
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
      <div className="flex text-white mt-2">
        <span>좋아요 {like}개</span>
      </div>
      <div className="relative text-white truncate" style={{ width: size }}>
        {/* <div>{userName}</div> */}
        <span
          className={`text-white ${
            isSubShow ? "whitespace-pre-wrap" : "block w-[300px]"
          } truncate overflow-hidden`}
        >
          {subMessage}
        </span>

        {subShowCondition && (
          <span
            className="absolute cursor-pointer text-white"
            onClick={() => setIsSubShow(true)}
            style={{ top: "0px", right: "130px" }}
          >
            더보기
          </span>
        )}

        {comments && (
          <div className="cursor-pointer">
            <span style={{ color: "#A8A8A8" }}>
              댓글{comments.length}개 모두 보기
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentSub;
