import React, { useState } from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
//compoents
import Profile from "../profile/Profile";
import CommentFeature from "./CommentFeature";

//hoc
import withIcon from "../hoc/withIcon";

const ProfieWithIcon = withIcon(Profile);

const Comment = ({ userName, text, like }) => {
  //TODO 나중에 서버에서 받은 값으로 useState 값 셋팅

  const handleToggleIcon = () => {
    return "hitIcon";
  };

  return (
    <>
      <div className="mt-3 mb-1">
        <ProfieWithIcon
          userName={userName}
          icon={faHeart}
          handleToggleIcon={handleToggleIcon}
        />
        <span className="mt-2" style={{ fontSize: "0.85em" }}>
          {text}
        </span>
      </div>
      <CommentFeature />
    </>
  );
};

export default Comment;
