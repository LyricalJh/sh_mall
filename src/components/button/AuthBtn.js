import React, { useState } from "react";

import Btn from "./Btn";

import { motion } from "framer-motion";

const AuthBtn = ({ setIsLogin }) => {
  const [x, setX] = useState(setIsLogin ? 35 : 130);
  const [y, setY] = useState(10);

  const handleOnClick = (path) => {
    if (path === "/login") {
      setX(35);
      setIsLogin(true);
    }
    if (path === "/join") {
      setX(130);
      setIsLogin(false);
    }
  };

  return (
    <div className="flex">
      <span onClick={() => handleOnClick("/login")} className="mx-4">
        <Btn name={"로그인"} />
        <motion.div
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          animate={{ x, y }}
          transition={{ type: "spring" }}
        />
      </span>
      <span onClick={() => handleOnClick("/join")}>
        <Btn name={"회원가입"} />
      </span>
    </div>
  );
};

export default AuthBtn;
