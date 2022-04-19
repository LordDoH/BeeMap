import { useEffect } from 'react';
import { useAuth } from '../../context/AuthUserContext';

function logout() {
  const { signOutAll } = useAuth();
  useEffect(() => {
    signOutAll();
  }, []);
  return <div />;
}

export default logout;
