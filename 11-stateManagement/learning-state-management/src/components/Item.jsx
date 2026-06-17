import styles from "../cssModule/Item.module.css";

//here item is generic components which is not responsible for any operation even does not know what happing it just only show the result and behavior and nothing more than this.
//it take courseName and show result and take handlePurchaseBtn and show its behavior.

const Item = ({ courseName, Purchased, handlePurchaseBtn }) => {

  const ClickHandle = (event) => {
    console.log(`Purchased ${courseName}`);
  }
  const backchange = (handlePurchaseBtn) => {
    handlePurchaseBtn();
    style.backgroundColor = lightblue;
  }
  return (
    <li className={`${styles.listItem} list-group-item ${Purchased && "active"}`}>{courseName}
      <button className={`${styles.clickButton} btn btn-info`} type="button"
        onClick={handlePurchaseBtn}
      >Purchase</button>
    </li>
  )
}
export default Item;
