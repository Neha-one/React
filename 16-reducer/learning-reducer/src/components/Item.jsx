import { useContext } from "react";
import styles from "../cssModule/Item.module.css"
import { AppContext } from "../store/app-item-store";

function Item({ itemName, itemDate }) {

  const { deleteItem } = useContext(AppContext);

  return (
    <div className={styles.itemDiv}>
      <div>{itemName}</div>
      <div>{itemDate}</div>
      <button onClick={() => deleteItem(itemName)}>Delete</button>
    </div>
  )
}
export default Item;