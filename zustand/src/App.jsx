import useCounterStore from "./store/counterStore"



const App = () => {
  const {count, increament, decreament} = useCounterStore()
  return (
    <div>
      <h1>{count} </h1>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  )
}
export default App