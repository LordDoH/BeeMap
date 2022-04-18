import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import auth from '../firebase/client';

// HOOK FOR VALIDATE IF USER IS LOGGED

const useAuthUser = () => {
  const { push, pathname } = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user && pathname !== '/register' && pathname !== '/') {
        push('/login');
      } else if (user && (pathname === '/login' || pathname === '/register')) {
        push('/');
      }
    });
  }, []);
};

export default useAuthUser;
