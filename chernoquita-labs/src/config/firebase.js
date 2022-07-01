// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGC1-1Qln9VW2IvugtsGo3kiKRZSpUBTY",
  authDomain: "chernoquita-labs.firebaseapp.com",
  projectId: "chernoquita-labs",
  storageBucket: "chernoquita-labs.appspot.com",
  messagingSenderId: "1047581977049",
  appId: "1:1047581977049:web:8ed958111dd35a3b7711c8",
  measurementId: "G-9X8J0N46DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);