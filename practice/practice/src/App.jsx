import styles from "./cssModule/App.module.css";
import AppName from "./components/AppName";
import InputBoxes from "./components/InputBoxes";
import DataContainer from "./components/DataContainer";
import { useState } from "react";
function App() {


  let dataList = [
    // {
    //   name: "book",
    //   date: 33

    // },
    {
      name: "coffee",
      date: 35
    }];

  let [appVal, setappVal] = useState(dataList);

  let handleOnclick = (NameVal, DateVal) => {
    // console.log(`${NameVal} ${DateVal}`);

    let newList = [...appVal, {
      name: NameVal,
      date: DateVal,
    }];
    setappVal(newList);

  };
  let handleDelClick = (itemName) => {
    // Array ke sab items rakho, bas us item ko hata do jiska name itemName ke equal hai.
    const newTodoItems = appVal.filter((item) => item.name !== itemName);
    setappVal(newTodoItems);
  }

  return (
    <div className={styles.container}>
      <AppName />
      <InputBoxes handleOnclick={handleOnclick} />
      <DataContainer dataList={appVal} handleDelClick={handleDelClick} />
    </div>
  )
}

export default App;
