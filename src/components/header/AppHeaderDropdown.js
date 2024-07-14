import React from "react";

//componets
import AppHeaderItem from "./AppHeaderItem";

const AppHeaderDropdown = () => {
  //메뉴 아이템 메뉴.
  const headerItems = [
    { name: "ABOUT" },
    { name: "SHOP" },
    { name: "REVIEW" },
    { name: "CONTACT" },
  ];

  //각 div => AppHeaderItme 으로
  return (
    <div className="flex justify-around bg-cyan-500">
      {headerItems.map((headerItem, index) => (
        <AppHeaderItem key={index} name={headerItem.name} />
      ))}
    </div>
  );
};

export default AppHeaderDropdown;
