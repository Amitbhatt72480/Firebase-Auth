import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYQDMY-runvgn5TyPurj7bw9zIVa7CJ1s",
  authDomain: "auth-firebase-d05c7.firebaseapp.com",
  projectId: "auth-firebase-d05c7",
  storageBucket: "auth-firebase-d05c7.appspot.com",
  messagingSenderId: "986307436876",
  appId: "1:986307436876:web:2d6a990f0b4a70b2ca6fe9",
  measurementId: "G-QTG6JY9KZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
