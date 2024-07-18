import React from "react";

const CommentFeature = ({ like = 999, date = "1주전" }) => {
  return (
    <div className="text-xs" style={{ color: "#A8A8A8" }}>
      <span>{date}</span>
      <span className="mx-1">좋아요 {like}</span>
      <span className="cursor-pointer">답글달기</span>
    </div>
  );
};

export default CommentFeature;
