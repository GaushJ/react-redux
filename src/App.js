import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";

const App = () => {
  const number = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Counter using react redux</h1>
        <button onClick={() => dispatch(incNum())}>increment</button>
        <span>
          <input placeholder="Inc/Dec" value={number} />
        </span>
        <button onClick={() => dispatch(decNum())}>Decrement</button>
      </div>
    </>
  );
};

export default App;
