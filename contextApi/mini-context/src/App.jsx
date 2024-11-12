import Login from "./components/login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
