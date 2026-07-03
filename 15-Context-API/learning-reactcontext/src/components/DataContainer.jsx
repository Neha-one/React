import { useContext } from "react";
import AppContext from "../store/AppContext";
import Item from "./Item";
import styles from "../cssModule/DataContainer.module.css"
import { useState } from "react";
function DataContainer({ handleDelClick }) {

  // user and AppContext link here through this line.
  const dataListContextObj = useContext(AppContext);
  const Contextdata = dataListContextObj.appVal;

  return (

    <ul className={styles.ulbox}>
      {Contextdata.map((item, index) => (
        <Item key={index} itemName={item.name} itemDate={item.date} ></Item>
      ))}
    </ul>

  )
}
export default DataContainer;