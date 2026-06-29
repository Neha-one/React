import { useRef } from "react";
import Focus from "./components/Focus";
import Input from "./components/Input";
import Clrbtn from "./components/ClrBtn";
import Style from "./components/Style";

function App() {
  const FocusinputRef = useRef();
  const ShowInputRef = useRef();

  //----simple testing-----
  // let inputRef = useRef(0);
  // inputRef.current = inputRef.current + 1;
  // console.log(inputRef.current);  

  const handleClick = () => {
    FocusinputRef.current.focus();
  };

  let handleShowOnClick = () => {

    alert(ShowInputRef.current.value);
  }
  let handleclrbtn = () => {
    FocusinputRef.current.value = "";
    ShowInputRef.current.value = "";
  }

  let setStyle = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    FocusinputRef.current.style.backgroundColor = `rgb(${r},${g},${b})`;
    ShowInputRef.current.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
  return (
    <>
      <Focus FocusinputRef={FocusinputRef} handleClick={handleClick} />

      <Input ShowInputRef={ShowInputRef} handleShowOnClick={handleShowOnClick} />
      <Clrbtn clrbtn={handleclrbtn} />
      <Style setStyle={setStyle} />
    </>
  )
}

export default App;
