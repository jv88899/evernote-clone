import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAUCShhsxTtY8e_ey9czJdsSNv6ZpS0jo",
    authDomain: "evernote-clone-e8e5d.firebaseapp.com",
    databaseURL: "https://evernote-clone-e8e5d.firebaseio.com",
    projectId: "evernote-clone-e8e5d",
    storageBucket: "evernote-clone-e8e5d.appspot.com",
    messagingSenderId: "491128881053",
    appId: "1:491128881053:web:887f5b2e60f86dcf7eb974",
    measurementId: "G-VHJY3PL2MS"
  }
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
