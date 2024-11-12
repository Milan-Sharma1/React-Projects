import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
const login = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({Username, Password})
    }

  return (
    <div style={{display:'grid',placeItems:'center'}}>
      <h2>Login</h2>
      <input type="text"
      value={Username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder="username" /><br/>
      <input type="password"
      value={Password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="password" /><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login
