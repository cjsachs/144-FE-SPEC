import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Socket } from 'socket.io-client';

interface SocketProps {
    socket: Socket
}

interface EmittedMessageProps {
    text: string
}

const ChatBody = ({ socket }: SocketProps) => {
  const [messages, setMessages] = useState<{ text: string }[]>([]);

  useEffect(() => {
    socket.on('message', (emittedMessage: EmittedMessageProps) => {
        console.log(emittedMessage)
        setMessages([...messages, emittedMessage])
    })
  }, [messages, socket]);

  return (
    <Container>
      {messages.map((message, idx) => (
        <Card key={idx}>
          <Card.Body>{message.text}</Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default ChatBody;
