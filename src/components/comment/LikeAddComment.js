import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//TODO Add more icons

const LikeAddComment = ({ ...props }) => {
  const [showComments, setShowComments] = useState(false);

  const handleOnClick = () => {
    console.log("click");
  };

  const handleCommentClick = () => {
    setShowComments((pre) => !pre);
  };

  return (
    <>
      <div className="flex flex-col text-white">
        <div>
          <span>{props.date}</span>
          <span>좋아요 {props.like}</span>
          <span className="" onClick={handleOnClick}>
            답글달기
          </span>
        </div>
        <div>
          <span onClick={handleCommentClick}>
            {showComments ? "답글 숨기기" : "답글 보기"}
          </span>
        </div>
      </div>
    </>
  );
};
export default LikeAddComment;
