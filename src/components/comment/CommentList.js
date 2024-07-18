import React from "react";

import Comet from "./Comment";

//TODO postId 댓글 데이터 호출
const CommentList = ({ postId }) => {
  //fake server call data with postId
  const comments = [
    {
      userName: "imdamin09",
      text: "저는 오늘 떡 뽁기샀는데 사도 맘이 속상합니다 본전빼는 장사를 왜하시는지 예쁜딸 도 같이 하시는데 구지 부침이 저리크지 않아도 될것같아요 호떡도요 조금작게해도 잘 팔릴것같아요 조금 남는 장사 하셨으면 좋을듲요",
    },
    {
      userName: "dhmom.94",
      text: "상호로는 다른 집이 나와서 검색하니주소가 역전시장길 54 이고상호는 역전손칼국수인데 캡션 내용이 다 안맞네요.",
    },
    {
      userName: "dhmom.94",
      text: "상호로는 다른 집이 나와서 검색하니주소가 역전시장길 54 이고상호는 역전손칼국수인데 캡션 내용이 다 안맞네요.",
    },
    {
      userName: "dhmom.94",
      text: "상호로는 다른 집이 나와서 검색하니주소가 역전시장길 54 이고상호는 역전손칼국수인데 캡션 내용이 다 안맞네요.",
    },
  ];

  return (
    <div
      className="overflow-auto h-[300px] mt-1 mb-2 no-scrollbar border-t-2"
      style={{ borderColor: "#262626" }}
    >
      {comments.map((item, index) => (
        <Comet key={index} userName={item.userName} text={item.text} />
      ))}
    </div>
  );
};

export default CommentList;
