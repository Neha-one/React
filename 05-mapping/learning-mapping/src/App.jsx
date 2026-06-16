function App() {
  let FoodItems = [
    "Dal",
    "Oats",
    "Curd",
    "Rice",
    "Green vegetables",
    "Milk",
    "Fruits",
    "Eggs",
  ];
  return (
    <>
      <ul>
        {FoodItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    
    </>
  );
}
export default App;
