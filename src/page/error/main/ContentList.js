import React from "react";

//compoents
import ContentWrapper from "./ContentWrapper";

const ContentList = ({ contents }) => {
  return (
    <div className="flex flex-col justify-center">
      {contents.map((content, index) => (
        <ContentWrapper key={index} {...content} />
      ))}
    </div>
  );
};

export default ContentList;
