import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Title"
        value={title}
        onChange={(fill) => setTitle(fill.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(fill) => setDesc(fill.target.value)}
      />
      <p>
        Preview: {title} - {desc}{" "}
      </p>
    </form>
  );  
}

export default App;
