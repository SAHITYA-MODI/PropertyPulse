// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertypulse-713ca.firebaseapp.com",
  projectId: "propertypulse-713ca",
  storageBucket: "propertypulse-713ca.appspot.com",
  messagingSenderId: "607033715517",
  appId: "1:607033715517:web:539b1996770e53ed4c7354",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
