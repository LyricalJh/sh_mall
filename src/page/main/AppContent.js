import React, { Suspense, useEffect } from "react";
import {
  Navigate,
  useLocation,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

//라우터
import routes from "../../routes";
import { useSocialLogin } from "./hook/useSocialLogin";

//session
import useLoginStore from "../login/store/LoginStore";

//AppContent의 역할은 Router의 위치에 따라 다른 컴포넌트로 교체해주는것임.
//TODO 기깔 나는 로딩 페이지 만들기 혹은 스켈레톤 이미지 로딩 사용할 수도 있음.

const AppContent = () => {
  const navigate = useNavigate();
  const { setLoginSession } = useLoginStore();
  const { response } = useSocialLogin();

  useEffect(() => {
    if (response) {
      response.data.res_code === "200" && navigate("/");
      console.log(response);
      setLoginSession(response.data.res_data);
    }
  }, [response]);

  //TODO 로그인 로딩화면 만들기
  if (!response) {
    return <div>loading...</div>;
  }

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
