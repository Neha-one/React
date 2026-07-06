import { useRef } from "react";
import { useDispatch } from "react-redux";
// import "../App.css";
const Controllers = () => {

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({ type: "INCREMENT" })
  }

  const InputElement = useRef();
  // const num = InRef.current.value;
  // console.log(num);
  const handleDic = () => {
    dispatch({ type: "DECREMENT" })
  }

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: InputElement.current.value,
      },
    });
    InputElement.current.value = "";

  }
  const handleSubs = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: InputElement.current.value,
      },
    });
    InputElement.current.value = "";

  }

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  }

  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY_TOGGLE"
    })
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleInc}>+1</button>
        <button type="button" className="btn btn-success" onClick={handleDic}>-1</button>
        <button type="button" className="btn btn-danger" onClick={handlePrivacy}>Privacy Toggle</button>
      </div>
      <div className="btnBox">
        <input ref={InputElement} type="number" placeholder="Enter number" />
        <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
        <button type="button" className="btn btn-warning" onClick={handleSubs}>Substract</button>
        <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
      </div>
    </>              
  )
}
export default Controllers;