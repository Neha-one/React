import { useContext } from "react";
import { AppContext } from "../store/app-item-store";

function Empty() {

  const { appVal } = useContext(AppContext);

  return (
    <>
      {appVal.length === 0 && <h2>Hey have you any problem</h2>}
    </>
  )
}
export default Empty;