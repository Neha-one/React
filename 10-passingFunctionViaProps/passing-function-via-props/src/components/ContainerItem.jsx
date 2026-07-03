// import styles from '../cssModule/ContainerItem.module.css'
import Item from './Item';


const ContainerList = ({ ItemList }) => {
  return (
    <ul className="list-group">
      {ItemList.map((item) => (
        <Item key={item} courseName={item} handlePurchaseBtn={() => {
          console.log(`${item} purchased!`)
        }} ></Item>
      ))}
    </ul>
  )
}
export default ContainerList;
