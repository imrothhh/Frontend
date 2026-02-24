import './App.css'
import { useState } from 'react'
function App() {
  const [list, setList] = useState([{id: 1}, {id: 2}, {id: 3}]);

  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      {list.map(item => (
        <div key={item.id}>
          Item {item.id} <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App
