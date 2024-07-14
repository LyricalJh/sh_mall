import React from "react";

const AppHeaderItem = ({ name }) => {
  //세로로 div 여러개
  return (
    <div className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer">{name}</div>
  );
};

export default AppHeaderItem;
