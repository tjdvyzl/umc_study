import React, { useState } from "react";
import Ad from "./Ad";
import Counter from "../redux/counter/Counter";

export default function AdPage() {
  const [isAdOn, setIsAdOn] = useState(true);

  const onClickHandler = () => {
    setIsAdOn(false);
  };

  return (
    <div>
      <Counter />
      <Ad isAdOn={isAdOn}></Ad>
      <button onClick={onClickHandler}>광고 안보기</button>
    </div>
  );
}
