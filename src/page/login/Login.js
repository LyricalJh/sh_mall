import React from "react";

//component
import Btn from "../../components/button/Btn";
import LoginBtn from "../../components/button/LoginBtn";
import DefaultInput from "../../components/input/DefaultInput";
//hoc
import withHeader from "../../components/hoc/withHeader";

const AuthBtns = () => {
  return (
    <div className="flex">
      <span className="mx-4">
        <Btn name={"로그인"} />
      </span>
      <span>
        <Btn name={"회원가입"} />
      </span>
    </div>
  );
};

const AuthBtnsWithHeader = withHeader(AuthBtns);

const Login = () => {
  const loginBtns = [
    { type: "kakao", color: "bg-[#FEE500]", textColor: "text-[#292717]" },
    { type: "naver", color: "bg-[#02C759]", textColor: "text-[#FFFFFF]" },
    { type: "google", color: "bg-[#FFFFFF]", textColor: "text-[#8F8F91]" },
  ];

  const inputs = [
    { type: "email", placeholder: "이메일" },
    { type: "text", placeholder: "닉네임" },
    { type: "text", placeholder: "성명" },
    { type: "password", placeholder: "비밀번호" },
  ];
  return (
    <div>
      <AuthBtnsWithHeader />
      <div className="flex justify-center items-center h-screen bg-[#000000]">
        <div className="flex flex-col mt-20 items-center p-7 rounded border-2 border-[#262626] text-white w-[400px] h-[600px]">
          <h1 className="font-[GowunBatang] text-[#F5F5F5] text-2xl whitespace-nowrap">
            오늘의 시톡
          </h1>
          <h1 className="font-[GowunBatang] text-[#F5F5F5] text-xl whitespace-wrap my-5">
            나만의 작품을 만들어보세요.
          </h1>
          {loginBtns.map((item, index) => (
            <span key={index} className="my-1 w-full">
              <LoginBtn
                name={item.type}
                bg={item.color}
                textColor={item.textColor}
              />
            </span>
          ))}
          <div className="text-white my-4">또는</div>
          {inputs.map((item, index) => (
            <span className="my-1 w-full" key={index}>
              <DefaultInput type={item.type} placeholder={item.placeholder} />
            </span>
          ))}
          <div className="w-full mt-2">
            <LoginBtn
              name={"가입"}
              bg={"bg-[#4BB4F8]"}
              textColor={"text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
