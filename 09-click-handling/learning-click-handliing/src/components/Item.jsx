import styles from "../cssModule/Item.module.css";

const Item = ({ courseName }) => {
  const ClickHandle = (event) => {
    console.log(event);
    console.log(`Purchased ${courseName}`);

  }
  return (
    <li className={`${styles.listItem} list-group-item`}>{courseName}
      <button className={`${styles.clickButton} btn btn-info`} type="button"
        onClick={(event) => { ClickHandle(event) }}
      >Purchase</button>
    </li>

  )
}
export default Item;   