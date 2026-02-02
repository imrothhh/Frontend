import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    setList([...list, input]);
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={addTask}>Add</button>
    </div>
  );
}


export default App
