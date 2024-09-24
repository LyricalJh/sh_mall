import React from "react";

const KeywordGridItem = ({ name }) => {
  const onMouseHover = () => {
    console.log("마우스를 올렸습니다!");
  };

  return (
    <div
      style={{ border: "1px solid #262626" }}
      className="flex justify-center items-center w-32 h-32 text-red"
      onMouseEnter={onMouseHover}
    >
      {name}
    </div>
  );
};

export default KeywordGridItem;
