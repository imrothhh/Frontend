import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["Task 1"]);

  const handleAdd = () => {
    const newTask = `Task ${list.length + 1}`;
    setList([...list, newTask]);
  };

  return (
    <div>
       <button onClick={handleAdd}>Add Item</button>
       <input type="text" placeholder="Input text" />
       <ul>
         {list.map((task, index) => (
           <li key={index}>{task}</li>
         ))}
       </ul>
    </div>
     
  )
}

export default App;
