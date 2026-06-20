import styles from "../cssModule/Item.module.css"

function Item({ itemName, itemDate, handleDelClick }) {


  return (
    <div className={styles.itemDiv}>
      <div>{itemName}</div>
      <div>{itemDate}</div>
      <button onClick={() => handleDelClick(itemName)}>Delete</button>
    </div>
  )
}
export default Item;