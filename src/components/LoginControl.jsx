import React, { useState } from "react";
import { MyLoginButton } from "./LoginControl.style";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/user/userSlice";

export default function LoginControl() {
  const isLoggedIn = window.localStorage.getItem("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginBtnHandler = () => {
    if (!isLoggedIn) {
      navigate("/loginPage");
    } else {
      dispatch(logout());
      navigate("/");
    }
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
