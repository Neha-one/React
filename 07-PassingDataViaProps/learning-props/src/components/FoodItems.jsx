import Item from "./Item";
//here {items} is the props object that we are passing from App.jsx and we are destructuring it here to get the items array.


const FoodItems = ({ Fitems }) => {

  return (
    <>
      <ul className="list-group">
        {Fitems.map((item) => (
          <Item itemName={item} key={item}></Item>
        ))}
      </ul>
    </>
  )
}
export default FoodItems;