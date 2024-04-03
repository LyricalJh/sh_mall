import React from "react";

const AppHeaderDropdown = () => {
  //메뉴 아이템 메뉴.
  const headerItems = [
    { name: "ABOUT" },
    { name: "SHOP" },
    { name: "SHOP" },
    { name: "REVIEW" },
    { name: "CONTACT" },
  ];

  //각 div => AppHeaderItme 으로
  return (
    <div className="flex justify-around">
      {headerItems.map((headerItem, index) => (
        <div key={index}>{headerItem.name}</div>
      ))}
    </div>
  );
};

export default AppHeaderDropdown;
