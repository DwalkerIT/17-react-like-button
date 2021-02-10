import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [num, setNum] = useState(0);
  let [str, setStr] = useState("How much do you LIKE this button");
  function handleNumClick() {
    setNum(num + 1);
  }

  return (
    <div>
      <h1>{str}</h1>
      <h1>{num}</h1>

      <button onClick={handleNumClick}>likes</button>
      <button onClick={() => setStr("Like Tom Brady Loves Winning")}>
        I LOVE IT
      </button>
    </div>
  );
}

export default App;
