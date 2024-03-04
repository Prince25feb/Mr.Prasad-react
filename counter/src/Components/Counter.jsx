// Counter.js
import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
   if (count < 25) {
    setCount(count + 1);
  }
  };

  const decrementCount = () => {
   if(count>0){
    setCount(count - 1);
  }
 }

 const resetCount=()=>{
  setCount(0)
 }
  return (
    <div className="Counter">
      <span>Count: {count}</span>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};

export default Counter;
