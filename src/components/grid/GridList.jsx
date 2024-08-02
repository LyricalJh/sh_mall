import React from "react";

//컴포넌트
import GridItem from "./GridItem";

const GridList = ({ listData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
      {listData.map((item, index) => (
        <div key={index}>
          <GridItem />
        </div>
      ))}
    </div>
  );
};

export default GridList;
