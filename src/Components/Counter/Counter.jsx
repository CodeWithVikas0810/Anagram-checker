import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [change, setChange] = useState(1);

  function decrement() {
    setValue((prev) => prev - change);
  }
  function increment() {
    setValue((prev) => prev + change);
  }
  function handleInput(e) {
    setChange(Number(e.target.value));
  }
  function handleReset() {
    setValue(0);
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h2>{value}</h2>
      <div className="btns">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div className="changeBy">
        <label>Increment/Decrement by</label>{" "}
        <input type="number" value={change} onChange={handleInput} />
      </div>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default Counter;
