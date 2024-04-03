import React from "react";

const MainPage = React.lazy(() => import("./page/MainPage"));
const Page404 = React.lazy(() => import("./page/error/Page404"));

//컴포넌트 routes 배열에 추가해서 컴포넌트 넣을것
const routes = [
  { path: "/main", name: "mainPage", element: MainPage },
  { path: "*", name: "Not found 404", element: Page404 },
];

export default routes;
