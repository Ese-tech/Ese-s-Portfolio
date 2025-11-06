// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzHbI8RWHKK1NTenw8NUIXrlnAS2bpIpw",
  authDomain: "cineverse-91310.firebaseapp.com",
  projectId: "cineverse-91310",
  storageBucket: "cineverse-91310.firebasestorage.app",
  messagingSenderId: "1086241389626",
  appId: "1:1086241389626:web:ae4f224d75633f49a38903",
  measurementId: "G-YTTZNM5KBQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };