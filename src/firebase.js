// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCynXbknZsKAfJ57yn38YfYkXLMp0xAhs",
  authDomain: "panditlive.firebaseapp.com",
  projectId: "panditlive",
  storageBucket: "panditlive.appspot.com",
  messagingSenderId: "439225019804",
  appId: "1:439225019804:web:c21b82553ae65bc0302c59"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();