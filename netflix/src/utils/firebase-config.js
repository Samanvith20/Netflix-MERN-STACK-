
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4Y1ZX7oZ3Gz2PFvvQ5r9Fdxd4-nIh_u0",
  authDomain: "react-netflix-clone-3a6e9.firebaseapp.com",
  projectId: "react-netflix-clone-3a6e9",
  storageBucket: "react-netflix-clone-3a6e9.appspot.com",
  messagingSenderId: "538991091440",
  appId: "1:538991091440:web:3277ac194a651e71e0ec35",
  measurementId: "G-RXVLW9GGN2"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
