import './App.css'
const DeleteBtn = ({id, onConfirm}) => {
  return (
    <button onClick={() => onConfirm(id)}>Delete</button>
  )
}
function App() {
 return ( <div className="App">
   <h2>Delete Button</h2>
   <DeleteBtn id={123} onConfirm={(id) => alert(`Confirmed to delete this id: ${id}`)} />
 </div>
 )
}

export default App
