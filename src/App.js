import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
//swr
import { SWRConfig } from "swr";
import DefaultLayer from "./layer/DefaultLayer";

//compoents
import Login from "./page/login/page/Login";
import KakaoLogin from "./page/login/page/KakaoLogin";

//TODO 로딩 페이지 제작 framer_motion 애니메이션으로 개발
const loadingPage = <div>Loading....</div>;

const Page404 = React.lazy(() => import(`./page/error/Page404`));
const Page500 = React.lazy(() => import(`./page/error/Page500`));

const App = () => {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: true,
          suspense: false,
          revalidateOnMount: true,
        }}
      >
        <HashRouter>
          <Suspense fallback={loadingPage}>
            <Routes>
              <Route
                exact
                path="/login"
                name="Login Page"
                element={<Login />}
              />
              {/* <Route
                exact
                path="/users/kakao/login"
                name="Login Page"
                element={<KakaoLogin />}
              /> */}
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={<DefaultLayer />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </SWRConfig>
    </>
  );
};

export default App;
