import Item from "./Item";
import styles from "../cssModule/DataContainer.module.css"
import { useState } from "react";
function DataContainer({ dataList, handleDelClick }) {


  return (

    <ul className={styles.ulbox}>
      {dataList.map((item, index) => (
        <Item key={index} itemName={item.name} itemDate={item.date} handleDelClick={handleDelClick}></Item>
      ))}
    </ul>

  )
}
export default DataContainer;