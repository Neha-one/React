import styles from "./cssModule/App.module.css";
import AppName from "./components/AppName";
import InputBoxes from "./components/InputBoxes";
import DataContainer from "./components/DataContainer";
import AppContextProvider from "./store/app-item-store";
import Empty from "./components/Empty";



function App() {
  return (
    <AppContextProvider>
      <div className={styles.container}>
        <AppName />
        <InputBoxes />
        <Empty />
        <DataContainer />
      </div>
    </AppContextProvider>)
}

export default App;