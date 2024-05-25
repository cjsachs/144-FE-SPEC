import { useMutation } from '@apollo/client';
import { CREATE_ALBUM } from '../mutations/mutations';
import { FormEvent, useRef } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';

const CreateAlbumForm = () => {
  const [createAlbum, { loading, error, data }] = useMutation(CREATE_ALBUM);

  const inputTitle = useRef<HTMLInputElement>(null);
  const inputUserId = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputTitle.current && inputUserId.current) {
      createAlbum({
        variables: {
          title: inputTitle.current.value,
          userId: inputUserId.current.value,
        },
      });
      inputTitle.current.value = '';
      inputUserId.current.value = '';
    }
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {error.message}
        </p>
      </Alert>
    );
  }

  return (
    <Container>
      <h1>Create Album</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="albumTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Album Title"
            ref={inputTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userId">
          <Form.Label>User ID:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            ref={inputUserId}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Album
        </Button>
      </Form>
      {data && data.createAlbum && (
        <div>
            <h2>Newly Created Album:</h2>
            <p>ID: {data.createAlbum.id}</p>
            <p>Title: {data.createAlbum.title}</p>
            <p>User ID: {data.createAlbum.user.id}</p>
            <p>User Name: {data.createAlbum.user.name}</p>
        </div>
      )}
    </Container>
  );
};
export default CreateAlbumForm;
