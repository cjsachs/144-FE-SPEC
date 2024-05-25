import { useState } from "react"

interface AuthUser {
    name: string,
    email: string
}

const AuthExample = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        const user = { name: 'savvy', email: 'savvy@ct.com' }
        setUser(user)
    }

    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
        <h1>User Login</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>Name: {user?.name ? user.name : 'User logged out'}</p>
        <p>Email: {user?.email}</p>
    </div>
  )
}
export default AuthExample