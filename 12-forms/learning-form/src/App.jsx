import styles from "./cssModule/App.module.css";
import Inputbox from "./component/Inputbox";
import ItemsContainer from "./component/ItemsContainer";
import { use, useState } from "react";
function App() {

  let dataList = [{
    name: "neha",
    age: 21
  }, {
    name: "mani",
    age: 21
  }]

  let [val, setval] = useState(dataList);
  
  let handleOnclick = (Name, Age) => {
    let newval = [...val, {
      name: Name,
      age: Age,
    }]
    setval(newval);
  }
  return (
    <div className={styles.container}>
      <Inputbox handleOnclick={handleOnclick} />
      <ItemsContainer dataList={val} />
    </div>
  )
}
export default App;