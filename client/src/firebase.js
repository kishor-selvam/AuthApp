// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-66759.firebaseapp.com",
  projectId: "mern-auth-66759",
  storageBucket: "mern-auth-66759.appspot.com",
  messagingSenderId: "334133170085",
  appId: "1:334133170085:web:756c76c2268d2a2a24224c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
