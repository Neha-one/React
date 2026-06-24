const ConditionalMap = () => {
  let usersList = [{
    name: "neha",
    age: 21, isActive: true
  },
  {
    name: "mani",
    age: 31, isActive: false
  },
  {
    name: "aryan",
    age: 12,
    isActive: true
  }]
  return (
    <>
      <h3>4. Mapping with Conditional Rendering</h3>
      <ul>
        {usersList.map((user,index) => (
          user.isActive ? (<li key={index}>{`${user.name} - ${user.age}`}</li>)
            : null
        ))}
      </ul>
    </>
  )
}
export default ConditionalMap;