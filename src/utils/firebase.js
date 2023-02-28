// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD55ygUjO3NBAPDLg6W-e4zQ4wfW_ZmFv8",
  authDomain: "whatsapp-4dd84.firebaseapp.com",
  projectId: "whatsapp-4dd84",
  storageBucket: "whatsapp-4dd84.appspot.com",
  messagingSenderId: "938287085457",
  appId: "1:938287085457:web:8d2b5d12dbcde4a0be4c30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const login = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const db = getFirestore();
