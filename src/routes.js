import React from "react";

const ContentList = React.lazy(() => import("./page/main/ContentList"));
const Mypage = React.lazy(() => import("./page/profile/Mypage"));
const Page404 = React.lazy(() => import("./page/error/Page404"));

//컴포넌트 routes 배열에 추가해서 컴포넌트 넣을것
const routes = [
  //회원가입
  //main
  { path: "/", name: "메인화면", element: ContentList },
  //profile
  { path: "/profile", name: "프로필", element: Mypage },

  //error
  { path: "/404", name: "Not found 404", element: Page404 },
];

export default routes;
