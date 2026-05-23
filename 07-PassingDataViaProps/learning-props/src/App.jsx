import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  let foodItemList = ["Dal", "Oats", "Curd", "Rice", "vegetables"];
  // let foodItemList=[];

  return (
    <>
      <Title></Title>
      <FoodItems Fitems={foodItemList}></FoodItems>
      <ErrorMessage Eitems={foodItemList}></ErrorMessage>
    </>
  )
}
export default App;