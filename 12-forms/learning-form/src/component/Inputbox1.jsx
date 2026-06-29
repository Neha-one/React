import { useState } from "react";

function Inputbox1({ handleOnclick }) {

  let [inputval, setinputval] = useState({
    name: "",
    age: ""
  })

  let handleNameChange = (event) => {
    // console.log(event.target.value);
    setinputval({ ...inputval, name: event.target.value })
  }
  let handleAgeChange = (event) => {
    setinputval({ ...inputval, age: event.target.value });
  }

  let clr = async (event) => {
    handleOnclick(inputval.name, inputval.age);
    event.preventDefault();
    await fetch("http://localhost:3000/submitn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: inputval.name,
          age: inputval.age
        })
      })

    setnameChange("");
    setageChange("");
  }

  return (

    <form onSubmit={clr}>
      <input type="text" placeholder="enter your name" onChange={handleNameChange} value={inputval.name} />
      <input type="number" placeholder="enter your age" onChange={handleAgeChange} value={inputval.age} />
      <button type="submit">Add</button>
    </form>
  )
}
export default Inputbox1;