import { useContext } from "react"
import { DataContext } from "../context/DataContext"


const DataPost = () => {
  const {user} = useContext(DataContext)
  console.log(user)
  return (
    <div>
      {
        user.map((u,i) => (
          <h1 key={u.id}>{u.name}</h1>
        ))
      }
    </div>
  )
}
export default DataPost