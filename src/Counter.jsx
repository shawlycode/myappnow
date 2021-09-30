import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

export function Counter() {
  const count = useSelector((state) => state.counterapp.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>COUNT:{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement </button>
    </div>
  );
}

export default Counter;
