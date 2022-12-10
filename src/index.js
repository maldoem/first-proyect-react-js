import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB_U8tEnlXK69TZ989ddzfnmdVyCqLiDI",
  authDomain: "react-e-commerce-52dbf.firebaseapp.com",
  projectId: "react-e-commerce-52dbf",
  storageBucket: "react-e-commerce-52dbf.appspot.com",
  messagingSenderId: "431219267351",
  appId: "1:431219267351:web:1b2f7a8d342b9346d70952",
  measurementId: "G-YG2PLW3P9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
