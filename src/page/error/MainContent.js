import React from "react";

//compoents
import ContentList from "./main/ContentList";

const MainContent = () => {
  const contents = [
    {
      thumImg: "https://www.handmk.com/news/photo/202306/16714_40371_5250.jpg",
      userName: "erin_myway",
      location: "서울 마포구",
      weather: "흐림",
      poemTitle: "더운 여름날",
      poemContent: `
한낮의 태양이 내리쬐고,
길 위의 그림자마저 지쳐가네.
바람마저 숨을 죽이고,
풀잎들은 고요히 잠든다.

무더운 공기 속,
땀방울이 흘러내리며,
저 멀리 바다 소리가
마음 속 시원함을 불러오네.

얼음이 가득한 유리잔 속,
톡 쏘는 탄산수처럼,
잠시나마 더위를 잊고,
평온한 순간에 몸을 맡긴다.
  `,
      like: 999,
      subMessage: `erin_myway
  #OPEN #메이드미 #최대50%할인
  저랑 제친구들은 다 쓰고 있는 메이드미
  
  친구들 요청으로 시작된 공구
  벌써 3차 공구 입니다`,
      comments: [
        { userName: "wndgks49", text: "오늘도 멋진 시 정말 멋져요!" },
        { userName: "wndgks49", text: "오늘도 멋진 시 정말 멋져요!" },
      ],
    },
    {
      thumImg: "https://www.handmk.com/news/photo/202306/16714_40371_5250.jpg",
      userName: "erin_myway",
      location: "서울 마포구",
      weather: "흐림",
      poemTitle: "더운 여름날",
      poemContent: `
한낮의 태양이 내리쬐고,
길 위의 그림자마저 지쳐가네.
바람마저 숨을 죽이고,
풀잎들은 고요히 잠든다.

무더운 공기 속,
땀방울이 흘러내리며,
저 멀리 바다 소리가
마음 속 시원함을 불러오네.

얼음이 가득한 유리잔 속,
톡 쏘는 탄산수처럼,
잠시나마 더위를 잊고,
평온한 순간에 몸을 맡긴다.
  `,
      like: 999,
      comments: [
        { userName: "wndgks49", text: "오늘도 멋진 시 정말 멋져요!" },
        { userName: "wndgks49", text: "오늘도 멋진 시 정말 멋져요!" },
      ],
    },
    {
      thumImg: "https://www.handmk.com/news/photo/202306/16714_40371_5250.jpg",
      userName: "erin_myway",
      location: "서울 마포구",
      weather: "흐림",
      poemTitle: "더운 여름날",
      poemContent: `
한낮의 태양이 내리쬐고,
길 위의 그림자마저 지쳐가네.
바람마저 숨을 죽이고,
풀잎들은 고요히 잠든다.

무더운 공기 속,
땀방울이 흘러내리며,
저 멀리 바다 소리가
마음 속 시원함을 불러오네.

얼음이 가득한 유리잔 속,
톡 쏘는 탄산수처럼,
잠시나마 더위를 잊고,
평온한 순간에 몸을 맡긴다.
  `,
      like: 999,
      subMessage: `erin_myway
  #OPEN #메이드미 #최대50%할인
  저랑 제친구들은 다 쓰고 있는 메이드미
  
  친구들 요청으로 시작된 공구
  벌써 3차 공구 입니다`,
      comments: [
        { userName: "wndgks49", text: "오늘도 멋진 시 정말 멋져요!" },
        { userName: "skan4342", text: "오늘도 멋진 시 정말 멋져요!" },
      ],
    },
  ];

  return (
    <div
      className="flex justify-center"
      style={{ backgroundColor: " #000000" }}
    >
      <div>
        <ContentList contents={contents} />
      </div>
    </div>
  );
};

export default MainContent;
