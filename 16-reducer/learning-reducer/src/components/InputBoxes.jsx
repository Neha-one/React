import { useContext, useState } from "react";
import styles from "../cssModule/InputBoxes.module.css";
import { AppContext } from "../store/app-item-store";

function InputBoxes() {

  const dataListContextObj = useContext(AppContext);
  const Contextdata = dataListContextObj.addNewItem;

  let [NameVal, setNameVal] = useState("");
  let [DateVal, setDateVal] = useState("");

  let hanleonNamechange = (event) => {
    setNameVal(event.target.value);
  }
  let hanleonDatechange = (event) => {
    setDateVal(event.target.value);
  }
  let handleClr = () => {
    Contextdata(NameVal, DateVal);
    setNameVal("");
    setDateVal("");
  };
  return (
    <div className={styles.inputbox}>
      <input type="text" placeholder="Enter your name" value={NameVal} onChange={hanleonNamechange} />
      <input type="number" placeholder="Enter your age" value={DateVal} onChange={hanleonDatechange} />
      <button onClick={handleClr}>Add</button>
    </div>
  )
}
export default InputBoxes;