import { useAuth0 } from "@auth0/auth0-react"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import { Spinner } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import HomePage from "./views/HomePage"
import AuthenticationGuard from "./components/AuthenticationGuard"
import ProfilePage from "./views/ProfilePage"
import ProtectedPage from "./views/ProtectedPage"

const App = () => {

  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/profile" element={<AuthenticationGuard component={ProfilePage}/>}/>
      <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage}/>}/>
    </Routes>
  )
}
export default App