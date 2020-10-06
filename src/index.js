import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from 'firebase/app';
import "./styles.css";
import Routes from "./routes";
import sw from './workers';

sw();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0zxnByCgshe7AL6UAm4nD1ESAc8htTM",
  authDomain: "bjnunez-7083f.firebaseapp.com",
  databaseURL: "https://bjnunez-7083f.firebaseio.com",
  projectId: "bjnunez-7083f",
  storageBucket: "bjnunez-7083f.appspot.com",
  messagingSenderId: "527447475988",
  appId: "1:527447475988:web:e467f55548382418516401",
  measurementId: "G-GEXGDM1R7H"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("app")
);
