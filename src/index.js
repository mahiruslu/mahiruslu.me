import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import "../src/assets/styles/main.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkU8CUlxB7RzSR2C5LDyofGwy5-ldcmU",
  authDomain: "mahiruslu-2bf95.firebaseapp.com",
  databaseURL:
    "https://mahiruslu-2bf95-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mahiruslu-2bf95",
  storageBucket: "mahiruslu-2bf95.appspot.com",
  messagingSenderId: "1067343299165",
  appId: "1:1067343299165:web:7f655f1cf9bf6b7d8b03b4",
  measurementId: "G-36YZL4QE7H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(`analytics: ${JSON.stringify(analytics)}`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
