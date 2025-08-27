import React, { useState } from "react";

function Guess() {
  const [input, setInput] = useState(1);
  const [num, setNum] = useState(Math.floor(Math.random() * 100) + 1);
  const [result, setResult] = useState("");

  function changeInput(e) {
    setInput(Number(e.target.value));
  }
  function reset() {
    setInput(1);
    setResult("");
    setNum(Math.floor(Math.random() * 100) + 1);
  }
  function check() {
    if (input > num) {
      setResult("Your guess is Higher than the actual number");
    } else if (input < num) {
      setResult(`Your guess is Less than the actual number`);
    } else {
      setResult("Your guess is right🎉");
    }
  }
  return (
    <div className="game-container ">
      <h2>Guess a Number between 0 and 100</h2>
      <input
        type="number"
        value={input}
        onChange={changeInput}
        min={0}
        max={100}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={check}>Check</button>

      {result && <p>{result}</p>}
    </div>
  );
}

export default Guess;
