import './App.css'
const TaskItem = (props) =>{
  return(
    <div style={{border: '1px solid black', margin: '10px'}}>
      <h3>{props.info.name}</h3>
      <p>{props.info.priority}</p>
    </div>
  )
}
function App() {
    const taskData = {id: 101, name: "Buy Milk", priority: "High"}

  return (
      <TaskItem info={taskData} />
  )
}

export default App
