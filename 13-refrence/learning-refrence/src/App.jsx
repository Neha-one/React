import { useRef } from "react";
import Focus from "./components/Focus";
import Input from "./components/Input";

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


  return (
    <>
      <Focus FocusinputRef={FocusinputRef} handleClick={handleClick} />

      <Input ShowInputRef={ShowInputRef} handleShowOnClick={handleShowOnClick} />
    </>)
}

export default App;
