import React from "react";

import ContentHeader from "../../../components/content/ContentHeader";
import ContentBody from "../../../components/content/ContentBody";
import ContentSub from "../../../components/content/ContentSub";

const ContentWrapper = ({ ...rest }) => {
  const size = "460px";
  return (
    <div className="mt-20  w-100">
      <ContentHeader {...rest} size={size} />
      <ContentBody {...rest} size={size} />
      <ContentSub {...rest} />
    </div>
  );
};

export default ContentWrapper;
