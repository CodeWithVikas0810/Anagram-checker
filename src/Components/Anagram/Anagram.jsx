import React, { useState } from "react";

function Anagram() {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [isAnagram, setIsAnagram] = useState(false);
  const [checked, setChecked] = useState(false);

  function checkAnagram() {
    let str1 = firstWord;
    let str2 = secondWord;
    str1 = str1.replace(/\s+/g, "").toLowerCase();
    str2 = str2.replace(/\s+/g, "").toLowerCase();
    setChecked(true);

    if (str1.length !== str2.length) {
      setIsAnagram(false);
      return;
    }

    if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
      setIsAnagram(true);
    } else {
      setIsAnagram(false);
    }
  }
  function firstInput(e) {
    setFirstWord(e.target.value);
    setChecked(false);
  }

  function secondInput(e) {
    setSecondWord(e.target.value);
    setChecked(false);
  }
  return (
    <div className="anagram-checker">
      <h2>Anagram Checker</h2>
      <label>
        <span>First word or phrase:</span>
        <input
          type="text"
          placeholder="e.g., listen"
          value={firstWord}
          onChange={firstInput}
        />
      </label>
      <label>
        <span>Second word or phrase:</span>
        <input
          type="text"
          placeholder="e.g., silent"
          value={secondWord}
          onChange={secondInput}
        />
      </label>
      <button onClick={checkAnagram}>Check if Anagram</button>

      {checked ? (
        isAnagram ? (
          <p>
            ✅ "{firstWord}" and "{secondWord}" are anagrams
          </p>
        ) : (
          <p>
            ❌ "{firstWord}" and "{secondWord}" are not anagrams
          </p>
        )
      ) : null}
    </div>
  );
}

export default Anagram;
