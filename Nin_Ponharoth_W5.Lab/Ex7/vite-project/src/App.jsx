import './App.css'
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState("");
  const items = ["React", "Javascript", "Tailwind"];
  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
