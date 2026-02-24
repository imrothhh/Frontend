import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newContent, setNewContent] = useState("");

  const handleAdd = () => {
    setPosts([...posts, { id: Date.now(), content: newContent }]);
    setNewContent("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        placeholder="Enter post content"
      />
      <button onClick={handleAdd}>Add Post</button>
      {posts.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
}

export default App;
