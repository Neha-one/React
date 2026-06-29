import { useState } from "react";
import Input from "./input";
import './a.css'
function App() {

  let [val, setVal] = useState(
    {
      name: "",
      email: ""
    }
  );
  const handleemailChange = (event) => {
    setVal({ ...val, email: event.target.value, })
  }
  const handlnameChange = (event) => {
    let newName = { ...val, name: event.target.value };
    setVal(newName);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(val.name);
    console.log(val.email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter name" value={val.name} onChange={handlnameChange} />
      <input type="email" placeholder="enter email" value={val.email} onChange={handleemailChange} />
      <button type="submit">submit</button>

    </form>
  )
}
export default App;