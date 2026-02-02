
import './App.css'

function App() {
  const tasks = ["Learn JSX", "Create Components", "Master State"];

  return (
    <div>
      <h1>My task list</h1>
      <p>Do all of my tasks</p>
      <ul>
        Total = {tasks.length}
      </ul>
    </div>
  )
}
export default App