// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZGZElnETSy4vfeNw5BimKEVoH0lTbe2A",
  authDomain: "varila-todo.firebaseapp.com",
  projectId: "varila-todo",
  storageBucket: "varila-todo.appspot.com",
  messagingSenderId: "607321127634",
  appId: "1:607321127634:web:68a70973e995eab80ccb0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;