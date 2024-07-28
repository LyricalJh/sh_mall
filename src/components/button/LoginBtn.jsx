import React from "react";

//swr
import { useLogin } from "../../page/login/api/LoginApi";

const LoginBtn = ({ name, bg, textColor }) => {
  const { trigger: login } = useLogin();

  const handleClick = async () => {
    const url =
      "https://kauth.kakao.com/oauth/authorize?client_id=" +
      process.env.REACT_APP_KAKAO_KEY +
      "&redirect_uri=" +
      process.env.REACT_APP_REDIRECT +
      "&response_type=code&" +
      "scope=account_email profile_nickname profile_image";

    window.location.href = url;
  };

  return (
    <div
      className={`rounded-lg w-full ${bg} cursor-pointer ${textColor} text-center font-bold px-8 py-1 w-[300px]`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default LoginBtn;
