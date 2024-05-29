import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { KeyboardEvent } from 'react';
import { Socket } from 'socket.io-client';

interface SocketProps {
    socket: Socket
}

const MessageInput = ({ socket }: SocketProps) => {
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    socket.emit('message', { text: message })
    setMessage('')
  };

  const handleEnterKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage()
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="messageInput">
          <Form.Label>Type your Message:</Form.Label>
          <Form.Control
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => handleEnterKey(event)}
            autoComplete="off"
          />
        </Form.Group>
        <Button onClick={handleSendMessage}>Send Message</Button>
      </Form>
    </Container>
  );
};
export default MessageInput;
