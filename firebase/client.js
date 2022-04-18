import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCQobE37PqOfvVAV_qZH_pklpqJiOcBCs4',
  authDomain: 'beemap-b28fc.firebaseapp.com',
  projectId: 'beemap-b28fc',
  storageBucket: 'beemap-b28fc.appspot.com',
  messagingSenderId: '1033569038785',
  appId: '1:1033569038785:web:6a42c3786d7f0b0b1ebf40',
  measurementId: 'G-WDMDVPKZ8Z',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
