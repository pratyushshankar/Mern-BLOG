// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "mern-blog-15593.firebaseapp.com",
  projectId: "mern-blog-15593",
  storageBucket: "mern-blog-15593.appspot.com",
  messagingSenderId: "1002913151139",
  appId: "1:1002913151139:web:a3c1b05dbd1d320cc7a716"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
