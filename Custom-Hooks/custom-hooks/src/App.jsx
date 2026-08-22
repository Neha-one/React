import useUser from "./hooks/useUser";

function App() {

  const userdata = useUser()
  console.log();
  return (
    <>
      <h2>user Details -all</h2>
      {userdata?.map((user) => (

        <p key={user.id}>{`FIRSTNAME: ${user.firstName} - PHONE: ${user.phone} - ROLE: ${user.role} - UNIVERSITY: ${user.university} `} IMAGE: <img src={user.image} alt="" /></p>
      )
      )
      }
      <h2>first user role</h2>
      <p> {userdata?.[0]?.role} </p>
    </> 
  )
}
export default App;