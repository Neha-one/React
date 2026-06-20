import { useState } from "react";
import styles from "../cssModule/InputBoxes.module.css";
function InputBoxes({ handleOnclick }) {

  let [NameVal, setNameVal] = useState("");
  let [DateVal, setDateVal] = useState("");

  let hanleonNamechange = (event) => {
    setNameVal(event.target.value);
  }
  let hanleonDatechange = (event) => {
    setDateVal(event.target.value);
  }
  let handleClr = () => {
    handleOnclick(NameVal, DateVal);
    setNameVal("");
    setDateVal("");
  };
  return (
    <div className={styles.inputbox}>
      <input type="text" placeholder="Enter your work" value={NameVal} onChange={hanleonNamechange} />
      <input type="date" value={DateVal} onChange={hanleonDatechange} />
      <button onClick={handleClr}>Add</button>
    </div>
  )
}
export default InputBoxes;