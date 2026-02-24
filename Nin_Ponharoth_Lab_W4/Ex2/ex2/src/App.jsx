import './App.css'

const TaskItem = () => {
  return (
    <>
      <li>Individual Task</li>
      <ul>
        <SubItem />
      </ul>
    </>
  );
}
const SubItem = () =>
  <li>Sub task</li>;

const TaskContainer = () => {
  return(
    <fieldset>
      <legend>My list</legend>
      <ul>
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </fieldset>
  )
}
function App() {
  return <TaskContainer />;
}

export default App
