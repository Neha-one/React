import { useContext } from "react";
import {AppContext} from "../store/app-item-store";

function Empty() {

  const dataListContextObj = useContext(AppContext);
  const Contextdata = dataListContextObj.appVal;
  let datalength = Contextdata.length

  return (
    <>
      {datalength === 0 && <h2>Hey have you any problem</h2>}
    </>
  )
}
export default Empty;