import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log(newCounter); // 1
  }}>{counter}</button>
}