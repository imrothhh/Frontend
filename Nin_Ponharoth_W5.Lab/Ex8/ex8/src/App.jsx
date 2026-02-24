import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([{id: 1, text: "Hello", isEdited:false}]);

  const markAsEdited = (id) => {
    setPosts(posts.map(post => post.id === id ? {...post, isEdited: true} : post));
  }

  return (
    <div className="App">
      {posts.map(post => (
        <div key={post.id}>
          {post.text} {post.isEdited && "(edited)"}
          <button onClick={() => markAsEdited(post.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App
