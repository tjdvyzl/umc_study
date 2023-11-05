import React, { useState } from "react";
import { MyLoginButton } from "./LoginControl.style";
import { useNavigate } from "react-router-dom";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const loginBtnHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/loginPage");
  };

  return (
    <div>
      <MyLoginButton loginBtnHandler={loginBtnHandler}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </MyLoginButton>
      <span style={{ color: "white", margin: "20px" }}>
        {isLoggedIn ? "환영합니다!" : "로그인을 해주세요!"}
      </span>
    </div>
  );
}
