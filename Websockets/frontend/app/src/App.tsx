import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { io } from "socket.io-client"
import MessageInput from "./components/MessageInput"
import ChatBody from "./components/ChatBody"

const socket = io('http://127.0.0.1:5000', {
  autoConnect: false
})

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)

  const handleConnect = () => {
    socket.connect()
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    socket.disconnect()
    setIsConnected(false)
  }

  return (
    <Container>
      <p>Connection Status: {isConnected ? 'Connected to Flask Server' : 'Disconnected from Flask Server'}</p>
      {isConnected ? (
        <>
          <ChatBody socket={socket}/>
          <MessageInput socket={socket}/>
          <Button variant="danger" onClick={handleDisconnect}>Disconnect from Server</Button>
        </>
      ) : (
        <Button variant="primary" onClick={handleConnect}>Connect to Server</Button>
      )}
    </Container>
  )
}
export default App