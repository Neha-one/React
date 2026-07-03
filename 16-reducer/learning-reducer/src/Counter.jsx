import { act, useReducer, useState } from "react";
import './Count.css'


//-------------simple without using type and payload----------
// function reducer(state, action) {
//   if (action === "increment") {
//     return state + 1;
//   }
//   else if (action === "decrement") {
//     return state - 1;
//   }
//   else if (action === "reset") {
//     return 0;
//   }
//   return state;
// }

//----------USING IF ELSE STATENT BUT IT IS TOO LONG----------
// function reducer(state, action) {
//   if (action.type === "increment") {
//     return state + action.payload;
//   }
//   else if (action.type === "decrement") {
//     return state - action.payload;
//   }
//   else if (action.type === "reset") {
//     return 0;
//   }
//   return state;
// }

//------SWITCH STATEMENT FOR MORE ACTIONS--------------
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
}


function Counter() {

  let [count, dispatch] = useReducer(reducer, 0)

  let incBtn = () => {
    dispatch(
      {
        type: "increment",
        payload: 10
      })
  }
  let decBtn = () => {
    dispatch(
      {
        type: "decrement",
        payload: 2
      })
  }
  let resetBtn = () => {
    dispatch(
      {
        type: "reset",
      })
  }
  //----------useState--------
  // let [count, setcount] = useState(0);
  // let incBtn = () => {
  //   setcount(count + 1);
  //   console.log(count);
  // }
  return (
    <>
      <button onClick={incBtn}>+</button>
      <button onClick={decBtn}>-</button>
      <button onClick={resetBtn}>reset</button>
      <h3>{count} </h3>
    </>
  )
}
export default Counter;