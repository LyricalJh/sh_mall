import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useSocailLogin } from "../../login/api/LoginApi";

export const useSocialLogin = () => {
  const [response, setResponse] = useState();
  const location = useLocation();

  const { trigger: login } = useSocailLogin();

  const postCodeToServer = async (code) => {
    const response = await login(code);
    setResponse(response);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    const code = searchParams.get("code");

    postCodeToServer(code);
  }, []);

  return { response };
};
