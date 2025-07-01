import { useState } from "react";

const StateComponent = () => {
  const [count, setCount] = useState(0);
  const increamentHandler = () => {
    setCount(100)
  }
  const increamentHandlers = () => {
    setCount(count +1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increamentHandler} >+</button>
      <button onClick={increamentHandlers} >+</button>
    </div>
  );
};
export default StateComponent;
