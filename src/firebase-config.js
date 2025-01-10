// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDgAOEoJwPhZyT1O0VlbQ4s_pkjDXKoDYo",
  authDomain: "blog-1c8b1.firebaseapp.com",
  projectId: "blog-1c8b1",
  storageBucket: "blog-1c8b1.firebasestorage.app",
  messagingSenderId: "1056920993599",
  appId: "1:1056920993599:web:a547f3219d67e75318dd8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // we store the result of getAUth(app) in the const "auth", then export it to make it useable outside of this file
export const provider = new GoogleAuthProvider(); // we store a new instance of the GoogleAuthProvider object in "provider", then export it

export const database = getFirestore(app);