// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtW1YL_AD42ZqYlUJHq91q2iRntNMwO8c",
  authDomain: "best-school-be37e.firebaseapp.com",
  projectId: "best-school-be37e",
  storageBucket: "best-school-be37e.appspot.com",
  messagingSenderId: "838306308470",
  appId: "1:838306308470:web:1fb94985f5a6ceac03da57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
