import { ReactNode } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface AuthenticationGuardProps {
  component: ReactNode | any;
}

const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting to Login Page</div>,
  });
  return (
    <Component />
    );
};

export default AuthenticationGuard;
