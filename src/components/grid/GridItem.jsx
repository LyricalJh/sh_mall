import React from "react";

//컴포넌트
import RoundImg from "../img/RoundImg";

const GridItem = ({
  title = "1인칭 작가시점",
  subTitle = "오늘 처음시작하기로 했다.",
  author = "시톡작가",
  img = "https://img1.daumcdn.net/thumb/C120x120.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/dVv1/image/MY6aUCJFArcQK2gayWqwCgj8avU.png",
}) => {
  return (
    <div className="flex justify-between rounded border border-[#262626] p-4">
      <div className="flex flex-col ">
        <h4 className="mt-1 text-sm text[#959595]">{title}</h4>
        <h4 className="mt-4">{subTitle}</h4>
        <span className="text-xs text[#959595] mt-12">by {author}</span>
      </div>
      <div className="">
        <RoundImg imgSrc={img} />
      </div>
    </div>
  );
};

export default GridItem;
