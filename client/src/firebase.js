// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-26120.firebaseapp.com",
  projectId: "mern-real-estate-26120",
  storageBucket: "mern-real-estate-26120.appspot.com",
  messagingSenderId: "343647749524",
  appId: "1:343647749524:web:5a5ecc38d8f670e304fb81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);