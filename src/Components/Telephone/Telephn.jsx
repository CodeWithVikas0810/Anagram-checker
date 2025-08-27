import React, { useState } from "react";

const Telephn = () => {
  const [num, setNum] = useState("");

  function useNumber(e) {
    let raw = e.target.value.replace(/\D/g, ""); // keep only numbers
    if (raw.length > 3) {
      setNum(`+(${raw.substring(0, 3)}) - ${raw.substring(3)}`);
    } else {
      setNum(raw);
    }
  }

  return (
    <div className="telephone">
      <h2>Telophone Formatter</h2>
      <input
        type="tel"
        maxLength={16}
        autoComplete="off"
        value={num}
        placeholder="Mobile number"
        onChange={useNumber}
      />
      <div className="sample">
        <label htmlFor="">+(123) - 4567890</label>
      </div>
    </div>
  );
};

export default Telephn;
