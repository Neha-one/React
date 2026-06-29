import { useState } from "react"

const Input = () => {

  let [inputVal, setinputVal] = useState("");

  const clickHandle = (inputVal) => {
    let newName = event.target.value;
    setinputVal(newName)
  }
  // const onChangeHandle = (event) => {
  //   console.log(event.target.value)
  // }
  return (
    <div>
      <input onChange={(inputval) => onChangeHandle(inputVal)} type="text" placeholder="enter name" />
      <button onClick={clickHandle}>add</button>
    </div>
  )
}
export default Input;