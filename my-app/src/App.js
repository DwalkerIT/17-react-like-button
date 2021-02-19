import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [num, setNum] = useState(0);
  let [str, setStr] = useState("likes");
  function handleNumClick() {
    setNum(num + 1);
  }
  useEffect(() => {
    // Update the document title using the browser API
    num === 1 ? setStr("like") : setStr("likes");
  });
  return (
    <div>
      {/* <h1>{str}</h1>
      <h1>{num}</h1> */}

      <button className="primaryBtn" onClick={handleNumClick}>
        {num} {str}
      </button>
      {/* <button className="primaryBtn" onClick={() => setStr("Like Tom Brady Loves Winning")}>
        I LOVE IT
      </button> */}
    </div>
  );
}

export default App;
