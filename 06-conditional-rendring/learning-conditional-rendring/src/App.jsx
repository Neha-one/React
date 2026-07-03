// function App() {
//   // "rice", "dal", "milk", "curd", "eggs", "nuts"
//   let FoodItems = [];

// ------------METHOD 01: If else statement-----------------
//   if (FoodItems.length === 0) {
//     return <h3>i am still hungry</h3>;
//   }
//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       <ul className="list-group">
//         {FoodItems.map((item) => (
//           <li className="list-group-item">{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function App() {
//   // "rice", "dal", "milk", "curd", "eggs", "nuts"
//   let FoodItems = [];

//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       {/*--------- METHOD 02: Ternary operator ----------*/}
//       {FoodItems.length === 0 ? <h3>i am still hungry.</h3> : null}
//       <ul className="list-group">

//         {FoodItems.map((item) => (
//           <li className="list-group-item">{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function App() {
//   // "rice", "dal", "milk", "curd", "eggs", "nuts"
//   let FoodItems = [];
//   let EmptyFoodItems =
//     FoodItems.length === 0 ? <h3>i am still hungry.</h3> : null;
//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       {/*----------METHOD 02: Ternary operator---------- */}
//       {EmptyFoodItems}
//       <ul className="list-group">
//         {FoodItems.map((item) => (
//           <li className="list-group-item">{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

function App() {
  // "rice", "dal", "milk", "curd", "eggs", "nuts"
  let FoodItems = [];

  return (
    <>
      <h1>Healthy Foods</h1>
      {/*------------METHOD 03: And operator --------------*/}
      {FoodItems.length === 0 && <h3>i am still hungry.</h3>}
      <ul className="list-group">
        {FoodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;