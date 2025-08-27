import React, { useState } from "react";

function Bg() {
  const [color, setColor] = useState("red");
  function changeBg() {
    var letters = "0123456789ABCDEF";
    var colors = "#";
    for (var i = 0; i < 6; i++) {
      colors += letters[Math.floor(Math.random() * 16)];
    }
    console.log(colors);
    setColor(colors);
  }
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h2>Background Changer</h2>
      <button onClick={changeBg}>Change Color!! 😎</button>
    </div>
  );
}

export default Bg;
