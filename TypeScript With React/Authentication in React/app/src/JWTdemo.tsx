import { FormEvent, useState } from 'react';

const JWTdemo = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Server endpoint down atm, simulating token
    // fetch('https://fakestoreapi.com/auth/login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: 'mor_2314',
    //         password: '83r5^_'
    //     })
    // })
    // .then(res=>res.json())
    // .then(json=>console.log(json))
    
    // simulate token
    const jwtToken = 'djagloeijao35465354'

    // store JWT token in session storage
    sessionStorage.setItem('jwtToken', jwtToken)

  }

  const handleLogout = () => {
    // clear JWT Token from storage
    sessionStorage.clear()
  }

  const getToken = () => {
    const token = sessionStorage.getItem('jwtToken')
    console.log(token)
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={getToken}>Get Token</button>
    </div>
  );
};
export default JWTdemo;
