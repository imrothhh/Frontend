import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>You are typing: {text}</p>
    </div>
  )
}

export default App
