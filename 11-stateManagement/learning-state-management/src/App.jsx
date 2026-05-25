<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./cssModule/App.module.css"
import ContainerList from "./components/ContainerItem";
import AppName from './components/AppName';
import CourseInput from './components/CourseInput';
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage';

function App() {
  //Method - 01 to use State:-
  // let textState = useState("course entered by user!");
  // let textToShow = textState[0];
  // let setTextState = textState[1];

  //Method - 02 to use State:- using array.
  let [textToShow, setTextState] = useState("course entered by user!");
  let [ItemList, setItemList] = useState([]);

  // console.log(`Current value is: ${textToShow}`);


  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newCourse = event.target.value;
      // event.target.value = "";
      let newList = [...ItemList, newCourse];
      setItemList(newList);
    }
  };

  // const ItemList = ['B.Tech', 'B.Com', 'MBA', 'BCA', 'BPharma', 'PHD'];


  return (
    <div className={styles.Container}>
      <AppName></AppName>
      <CourseInput handleKeyDown={onKeyDown}></CourseInput>
      <ErrorMessage ItemList={ItemList}></ErrorMessage>
      <ContainerList ItemList={ItemList}></ContainerList>
    </div>
  )
}
export default App;
