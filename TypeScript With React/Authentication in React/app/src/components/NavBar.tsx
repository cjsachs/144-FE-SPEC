import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Learning Auth0</Navbar.Brand>
        <Navbar.Toggle />
        {isAuthenticated ? (
          <>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="/profile">{user?.name}</a>
              </Navbar.Text>
            </Navbar.Collapse>
            <LogoutButton />
          </>
        ) : <LoginButton/>}
      </Container>
    </Navbar>
  );
};
export default NavBar;
