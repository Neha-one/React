import { useState } from "react";

function Neha() {
  let fullname = "neha kumari baranwal"
  let [name, namemethod] = useState("Neha");
  let onclickm = () => {
    namemethod(fullname);
  }
  return (
    <>
      <h1 onClick={onclickm}>HIi its {name} </h1>
    </>
  )
}
export default Neha;
