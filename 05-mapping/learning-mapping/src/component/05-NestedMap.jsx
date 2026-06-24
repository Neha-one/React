const NestedMap = () => {
  let List = [
    {
      id: 1,
      students: ["neha", "mani", "aryan"]
    }
  ]
  return (
    <>
      <h3>5. Nested Mapping (Array inside Array)</h3>
      {List.map((value) => (
        <div key={value.id}>
          {value.students.map((stuName, index) => (
            <div key={index}> {stuName}</div>))}
        </div>

      ))}
    </>


  )
}
export default NestedMap;