const NumMap = () => {
  let List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (<>
    <h3>2. Mapping an Array of Numbers</h3>
    <ul>
      {List.map((value,index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  </>)
}
export default NumMap;