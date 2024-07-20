import React from "react";

//components
import SideBarItem from "./SideBarItem";

//해당 커포넌트 책임 사이드 바 리스트 + 사이드 바 컴포넌트 2가지를 안다.

const SideBarList = ({ listData }) => {
  return (
    <div className="felx flex-col h-full">
      <div className="flex items-center justify-center mt-10">
        <h2 className="font-[GowunBatang] text-2xl text-[#F5F5F5]">
          오늘의 시톡
        </h2>
      </div>
      {listData.map((item, index) => (
        <SideBarItem key={index} {...item} />
      ))}
    </div>
  );
};

export default SideBarList;
