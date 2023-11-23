import React, { useState } from "react";
import Ad from "./Ad";

export default function AdPage() {
  const [isAdOn, setIsAdOn] = useState(true);

  const onClickHandler = () => {
    setIsAdOn(!isAdOn);
  };

  return (
    <div>
      <Ad isAdOn={isAdOn}></Ad>
      {isAdOn ? (
        <button onClick={onClickHandler}>광고 안보기</button>
      ) : (
        <button onClick={onClickHandler}>광고 보기</button>
      )}
    </div>
  );
}
