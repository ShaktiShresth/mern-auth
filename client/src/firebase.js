// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "mern-auth-8fa8f.firebaseapp.com",
  projectId: "mern-auth-8fa8f",
  storageBucket: "mern-auth-8fa8f.appspot.com",
  messagingSenderId: "580183914049",
  appId: "1:580183914049:web:74e427924910aab4dab8c0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
