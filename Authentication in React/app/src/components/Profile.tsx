import { useAuth0 } from "@auth0/auth0-react"
import { Spinner } from "react-bootstrap"

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

  return (
    isAuthenticated && (
        <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
        </div>
    )
  )
}

export default Profile