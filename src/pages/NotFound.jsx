import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/`);
  };

  return (
    <div style={{ margin: "70px 150px" }}>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <span style={{ color: "red" }} onClick={onClickHandler}>
        메인 페이지로 이동
      </span>
    </div>
  );
}
