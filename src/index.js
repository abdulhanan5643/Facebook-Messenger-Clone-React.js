import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyA9aO6nB_sh0S9mJJmGuaji2_bYGRMdmE8",
    authDomain: "facebook-messenger-clone-b060b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-b060b.firebaseio.com",
    projectId: "facebook-messenger-clone-b060b",
    storageBucket: "facebook-messenger-clone-b060b.appspot.com",
    messagingSenderId: "999899699939",
    appId: "1:999899699939:web:335c7b4feecbe6ffbfc3d6",
    measurementId: "G-7RT6EP19JW"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
