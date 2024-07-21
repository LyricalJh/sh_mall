import React from "react";

const SearchList = () => {
  return (
    <div className="flex flex-col">
      {/* 상단 영역 */}
      <div className="flex p-4 items-center">
        <div className="text-lg text-white">최근 검색 항목</div>
      </div>
      {/* 중앙 영역 */}
      <div className=" h-dvh flex items-center justify-center">
        <div className="text-sm text-[#A8A8A8]">최근 검색 내역 없음.</div>
      </div>
    </div>
  );
};

export default SearchList;
