
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1VKqcjrHPgAznNrSitiYiMR8raVjgM98",
  authDomain: "react-signup-6e027.firebaseapp.com",
  projectId: "react-signup-6e027",
  storageBucket: "react-signup-6e027.appspot.com",
  messagingSenderId: "108267202932",
  appId: "1:108267202932:web:644a79fc4eac7ff2472421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseAuth = getAuth(app);