import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    // React.Fragment is used to group a list of children without adding extra nodes to the DOM. and it can be written as <></> instead of <React.Fragment></React.Fragment> without importing React.
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Oats</li>
        <li class="list-group-item">Curd</li>
        <li class="list-group-item">Rice</li>
        <li class="list-group-item">vegetables</li>
      </ul>
    </React.Fragment>
  );
}

// function App() {
//   return (
//     // it can be written as <></> instead of <React.Fragment></React.Fragment> without importing React.
//     <>
//       <h1>book store</h1>
//       <ul class="list-group">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//         <li class="list-group-item">A fourth item</li>
//         <li class="list-group-item">And a fifth one</li>
//       </ul>
//     </>

//   );
// }

export default App;
