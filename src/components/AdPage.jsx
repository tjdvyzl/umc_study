import React, { useState } from "react";
import Ad from "./Ad";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../counter/counterSlice";

export default function AdPage() {
  const [isAdOn, setIsAdOn] = useState(true);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const onClickHandler = () => {
    setIsAdOn(false);
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Ad isAdOn={isAdOn}></Ad>
      <button onClick={onClickHandler}>광고 안보기</button>
    </div>
  );
}
