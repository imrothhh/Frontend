import { useState } from 'react'
import './App.css'

function App() {
    const [search, setSearch] = useState("");
    const items = ["Apple", "Banana", "Cherry"];
     const filteredItems = items.filter((item) => item.includes(search.toLowerCase()));
  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
