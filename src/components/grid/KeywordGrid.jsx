import React from "react";

//컴포넌트
import KeywordGridItem from "./KeywordGridItem";

const KeywordGrid = ({ listData }) => {
  return (
    <div className="grid grid-cols-8 gap-7 text-white">
      {listData.map((item, index) => (
        <div key={index}>
          <KeywordGridItem name={item.name} />
        </div>
      ))}
    </div>
  );
};

export default KeywordGrid;
