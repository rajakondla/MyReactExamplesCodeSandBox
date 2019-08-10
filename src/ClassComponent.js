import React, { useState, useReducer, useCallback } from "react";

let func;

const reducer = function(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    default:
      return state;
  }
};

const UseStateComponent = () => {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  // const increment = () => {
  //   setCount((prev, props) => {
  //     return prev + 1;
  //   });
  // };

  const increment = useCallback(() => {
    // setCount((prev, props) => {
    //   return prev + 1;
    // });
    dispatch({ type: "inc" });
  }, []);

  // const increment = () => {
  //   dispatch({ type: "inc" });
  // };

  let val = func ? func === increment : false;
  func = increment;

  return (
    <>
      {/* <button onClick={()=>{dispatch({type:"inc"})}}>Click</button> */}
      <button onClick={increment}>Click</button>
      <h1>{count}</h1>
      <h2>{val.toString()}</h2>
    </>
  );
};

export default UseStateComponent;
