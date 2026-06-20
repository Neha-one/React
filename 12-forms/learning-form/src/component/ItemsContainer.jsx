import Item from "../component/Item";
function ItemsContainer({ dataList }) {

  return (
    <div>
      {dataList.map((item) => (
        <Item key={Math.random()} itemname={item.name} itemage={item.age}></Item>
      ))}
    </div>
  )
}
export default ItemsContainer;