import { useSelector } from "react-redux";
const Body = () => {
  const counter = useSelector((store) => 
    store.counter
  )
  return (
    <div className="col-lg-6 mx-auto">
      {" "}
      <p className="lead mb-4">
         Current value : {counter}
      </p>{" "}
    </div>
  )
}
export default Body;