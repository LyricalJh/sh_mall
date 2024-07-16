import React from "react";

import { faHeader } from "@fortawesome/free-solid-svg-icons";

//compoents
import Profile from "../profile/Profile";

//hoc
import withIcon from "../hoc/withIcon";

const ProfieWithIcon = withIcon(Profile);

const Comment = ({ userName, text }) => {
  return (
    <div>
      <ProfieWithIcon userName={userName} icon={faHeader} />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default Comment;
