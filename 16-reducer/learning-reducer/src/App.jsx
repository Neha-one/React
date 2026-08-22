import ItemContextReducer from "./store/app-item-store";
import styles from "./cssModule/App.module.css";
import AppName from "./components/AppName";
import InputBoxes from "./components/InputBoxes";
import DataContainer from "./components/DataContainer";
import Empty from "./components/Empty";

function App() {


  return (
    <ItemContextReducer>
      <div className={styles.container}>
        <AppName />
        <InputBoxes />
        <Empty />
        <DataContainer />
      </div>
    </ItemContextReducer>
  )
}

export default App;
