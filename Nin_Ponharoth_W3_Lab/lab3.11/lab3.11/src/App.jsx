import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState(["Eat", "Sleep", "Code"]);

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}


export default App
