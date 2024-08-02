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
