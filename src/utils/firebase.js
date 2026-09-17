// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQoibrH8CBcsmraY1XiAJmoZY2gmWVSrU",
  authDomain: "netflixgpt-35df6.firebaseapp.com",
  projectId: "netflixgpt-35df6",
  storageBucket: "netflixgpt-35df6.firebasestorage.app",
  messagingSenderId: "423495468343",
  appId: "1:423495468343:web:beb96ed0c2a573acd2c6b2",
  measurementId: "G-FDXX5SGY7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();