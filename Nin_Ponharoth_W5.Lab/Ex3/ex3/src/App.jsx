
import './App.css'
const PostImage = ({url}) => {
  //Task: If url is null, show a gray <div>. If url exist, show<img>.
  if (!url) {
    return <div className='img-wrapper empty'>
      <p>No image available</p>
      <style>{`.empty { background-color: gray; width: 300px; height: 200px; display: flex; align-items: center; justify-content: center;  }`}</style>
      </div>
  }
  return <div className='img-wrapper'><img src={url} alt="Post image" /></div>;
}
function App() {
  const imageUrl =null;
  return (
    <div className="App">
      <PostImage url={imageUrl} />
    </div>
  );
}
export default App
