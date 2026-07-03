// import styles from '../cssModule/ContainerItem.module.css'
import { useState } from 'react';
import Item from './Item';


const ContainerList = ({ ItemList }) => {

  let [activeItem, setActiveItem] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
  }

  return (
    <ul className="list-group">
      {ItemList.map((item) => (
        <Item key={item} courseName={item}
          Purchased={activeItem.includes(item)}
          handlePurchaseBtn={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  )
}
export default ContainerList;
