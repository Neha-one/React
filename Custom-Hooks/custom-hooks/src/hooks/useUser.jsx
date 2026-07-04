import { useEffect, useState } from "react"

function useUser() {

  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => {
        setUser(data.users);
        console.log(data.users)
      });
  }, [])

  return user;
}
export default useUser;