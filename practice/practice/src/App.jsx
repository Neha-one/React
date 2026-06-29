import { useState } from "react";
import Input from "./input";
import './a.css'
function App() {

  let [val, setval] = useState({
    name: "",
    age: ""
  });

  let [boxval, setboxval] = useState([])

  const handlenamechange = (event) => {
    setval({ ...val, name: event.target.value })
  }
  const handleage = (event) => {
    setval({ ...val, age: event.target.value })
  }
  const handlesubmit = (event) => {
    event.preventDefault();
    // console.log(val.name);
    // console.log(val.age);
    setboxval([...boxval, val]);
    setval({
      name: "",
      age: ""
    });
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" value={val.name} placeholder="enter name" onChange={handlenamechange} />
        <input type="number" value={val.age} placeholder="enter your age" onChange={handleage} />
        <button type="submit">submit</button>
      </form>
      <div className="divbox">
        {boxval.map((item) => (
          <li key={item.name}>{`${item.name} - ${item.age}`}</li>
        ))}
      </div>
    </>
  )
}
export default App;