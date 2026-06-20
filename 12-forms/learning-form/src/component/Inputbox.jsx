import { useState } from "react";

function Inputbox({ handleOnclick }) {

  let [nameChange, setnameChange] = useState("")
  let [ageChange, setageChange] = useState("")

  let handleNameChange = (event) => {
    // console.log(event.target.value);
    setnameChange(event.target.value)
  }
  let handleAgeChange = (event) => {
    setageChange(event.target.value);
  }
  let clr = async (event) => {
    handleOnclick(nameChange, ageChange);
    event.preventDefault();
    await fetch("http://localhost:3000/submitn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: nameChange,
          age: ageChange
        })
      })

    setnameChange("");
    setageChange("");
  }

  return (

    <form onSubmit={clr}>
      <input type="text" placeholder="enter your name" onChange={handleNameChange} value={nameChange} />
      <input type="number" placeholder="enter your age" onChange={handleAgeChange} value={ageChange} />
      <button type="submit">Add</button>
    </form>
  )
}
export default Inputbox;