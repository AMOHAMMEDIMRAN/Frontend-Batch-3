import axios from "axios"
import { useEffect, useState } from "react"




const UseEffectComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
       const res = await axios.get("https://jsonplaceholder.typicode.com/users");
       console.log(res.data)
       setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [data])
  

  return (
    <div>
      <h1>This is my project</h1>
      {
        data.map((u, i) => (
          <h1 key={i}>{u.name}</h1>
        ))
      }

    </div>
  )
}
export default UseEffectComponent