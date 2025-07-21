// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1gkPPtF731Hm-0QRMRXdv2MQQC3dmwJ8",
  authDomain: "netflixgpt-af1bd.firebaseapp.com",
  projectId: "netflixgpt-af1bd",
  storageBucket: "netflixgpt-af1bd.firebasestorage.app",
  messagingSenderId: "259193585322",
  appId: "1:259193585322:web:79bf315a63643a566edad3",
  measurementId: "G-P4PM7LJG5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
