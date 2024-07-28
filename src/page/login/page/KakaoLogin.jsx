import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const KakaoLogin = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");

    if (code) {
      // 필요한 OAuth 처리를 수행합니다.
      // ...

      // HashRouter의 경로로 리다이렉트
      window.location.replace(`/#/users/kakao/login?code=${code}`);
    }
  }, [location.search]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
