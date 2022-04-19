import { createContext, useContext } from 'react';
import useFirebaseAuth from '../firebase/userFirebaseAuth';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn: async () => {},
  createUser: async () => {},
  signOutAll: async () => {},
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
