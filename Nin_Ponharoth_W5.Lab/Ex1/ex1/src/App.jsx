
import { useState } from 'react'
import './App.css'
const AuthorInfo = ({user}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  )
}
const PostHeader = ({user}) => { return <AuthorInfo user={user} /> } 
const PostItem = ({user}) => <PostHeader user={user} /> 
const FeedList = ({user}) => <PostItem user={user} />
function App() {
  const [user] = useState({
    name: 'Ronan',
    role: 'Admin'
  })
  return <FeedList user={user} />
 
}

export default App
