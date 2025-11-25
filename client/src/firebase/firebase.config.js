// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_6hH8HykPLPaSam0lTyiUogdHZVUJpCE",
  authDomain: "connectcare-5f83f.firebaseapp.com",
  projectId: "connectcare-5f83f",
  storageBucket: "connectcare-5f83f.firebasestorage.app",
  messagingSenderId: "526286506786",
  appId: "1:526286506786:web:daeb0f7b72dedcdb9df37b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
