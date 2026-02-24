
import './App.css'

function ProfileIcon(){
  return(
    <div>
      {/*displya the user name /*/}
      <p>John Doe</p>
    </div>
  )
}

function Header(){
  return(
    <header>
      <ProfileIcon />
    </header>
  );
}
function App() {
  const user = "John Doe";
  return(
    <div>
      <Header />
      <h1>Welcome, {user}!</h1>
    </div>
  )
}

export default App
