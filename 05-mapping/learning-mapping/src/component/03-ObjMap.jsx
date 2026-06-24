const ObjMap = () => {
  let ObjList = [
    {
      name: "neha",
      age: 21,
      study: "B.Tech"
    },
    {
      name: "mani",
      age: 21,
      study: "B.Com"
    }
    ,
    {
      name: "aryan",
      age: 13,
      study: "9th"
    }
  ]
  return (
    <>
      <h3>3. Mapping an Array of Objects</h3>
      <ul>
        {ObjList.map((value,index) => (
          <li key={index}>{`name : ${value.name} - age : ${value.age} - study : ${value.study}`}</li>
        ))}
      </ul>
    </>
  )
}
export default ObjMap;