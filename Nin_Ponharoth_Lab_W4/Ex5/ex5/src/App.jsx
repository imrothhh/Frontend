import { useState } from "react";
import "./App.css";

const TaskItems = ({ name, onRemove }) => (
  <li>
    {name} <button onClick={onRemove}>Delete</button>
  </li>
);

function App() {
  const [tasks, setTasks] = useState(["React", "JSX", "Props"]);

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((t, i) => (
        <TaskItems key={i} name={t} onRemove={() => removeTask(i)} />
      ))}
    </ul>
  );
}

export default App;
