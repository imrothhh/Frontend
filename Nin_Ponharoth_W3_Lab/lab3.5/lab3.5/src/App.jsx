
import './App.css'

function TodoItem(){
  return <li>A single Task</li>;
}
function App() {

  return (
    <div>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}

export default App
