import './App.css'
const PostActions = ({onLike, onShare}) => {
  return (
    <div>
      <button onClick = {onLike}>Like</button>
      <button onClick = {onShare}>Share</button>
    </div>
  )
}
  
function App() {
  return(
    <div className="App">
      <h1>My Post</h1>
      <PostActions onLike={() => alert('Liked!')} onShare={() => alert('Shared!')} />
    </div>
  )
}

export default App
