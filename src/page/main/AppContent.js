import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//라우터
import routes from "../../routes";

//AppContent의 역할은 Router의 위치에 따라 다른 컴포넌트로 교체해주는것임.
//TODO 기깔 나는 로딩 페이지 만들기 혹은 스켈레톤 이미지 로딩 사용할 수도 있음.

const AppContent = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppContent;
