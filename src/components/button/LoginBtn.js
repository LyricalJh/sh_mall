import React from "react";

const LoginBtn = ({ name, bg, textColor }) => {
  return (
    <div
      className={`rounded-lg w-full ${bg} cursor-pointer ${textColor} text-center font-bold px-8 py-1 w-[300px]`}
    >
      {name}
    </div>
  );
};

export default LoginBtn;
