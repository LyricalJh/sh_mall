import React from "react";

import KeywordGrid from "../../components/grid/KeywordGrid";

const Explore = () => {
  const category = [
    { name: "자연을 노래하다" },
    { name: "별과 달의 이야기" },
    { name: "사랑의 속삭임" },
    { name: "봄의 서정" },
    { name: "가을의 향기" },
    { name: "겨울 속 고요함" },
    { name: "여름날의 풍경" },
    { name: "시간의 흐름" },
    { name: "감정의 파도" },
    { name: "그리움의 노래" },
    { name: "삶의 철학" },
    { name: "꿈꾸는 순간들" },
    { name: "하늘 아래의 시" },
    { name: "고독과 사색" },
    { name: "희망의 메시지" },
    { name: "삶과 죽음의 경계" },
    { name: "어린 시절의 기억" },
    { name: "순수한 마음" },
    { name: "시간을 넘어" },
    { name: "마음의 여행" },
    { name: "추억을 그리다" },
    { name: "자유로운 영혼" },
    { name: "도시의 밤" },
    { name: "빛과 그림자" },
  ];

  return (
    <div className="flex flex-col p-20">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center text-white text-xl font-[GowunBatang] mb-6">
          S I - T A L K - K E Y W O R D
        </div>
        <div className="flex justify-center">
          <KeywordGrid listData={category} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
