import { useState } from "react";
import AppContext from "./store/AppContext";
import styles from "./cssModule/App.module.css";
import AppName from "./components/AppName";
import InputBoxes from "./components/InputBoxes";
import DataContainer from "./components/DataContainer";
import Empty from "./components/Empty";
function App() {


  let dataList = [
    {
      name: "aryan",
      date: 15,
    }
  ];

  let [appVal, setappVal] = useState(dataList);

  let addNewItem = (NameVal, DateVal) => {
    let newList = [...appVal, {
      name: NameVal,
      date: DateVal,
    }];
    setappVal(newList);

  };
  let deleteItem = (itemName) => {
    // Array ke sab items rakho, bas us item ko hata do jiska name itemName ke equal hai.
    const newTodoItems = appVal.filter((item) => item.name !== itemName);
    setappVal(newTodoItems);
  } 


  return (
    <AppContext.Provider value={{ appVal, addNewItem, deleteItem }}>
      <div className={styles.container}>
        <AppName />
        <InputBoxes />
        <Empty />
        <DataContainer />
      </div>
    </AppContext.Provider>

  )
}

export default App;
