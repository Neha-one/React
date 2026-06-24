const StringMap = () => {
  let List = ["neha", "mani", "aryan", "akash"]

  return (<>
    <h3>1. Mapping an Array of Strings</h3>
    <ul>
      {List.map((name,index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  </>)
}
export default StringMap;