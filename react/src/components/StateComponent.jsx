import { useState } from "react";
import { Link } from "react-router-dom"


const StateComponent = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border border-l-lime-300"
      />

      <h1>{user}</h1>
      <h1>Hello</h1>

    <Link to='/project'>
    Naviagte to project
    </Link>

    </div>
  );
};
export default StateComponent;
