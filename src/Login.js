import React, { useState } from "react";
import "./Login.css";
import logo from "./assets/AeLogo.png";
import comparison from "./assets/comparison.png";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

// import { actionTypes } from "./reducer";
// import firebase from "firebase";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_right">
        <img className="rotate linear infinite" src={comparison}></img>
      </div>
      <div className="login_left">
        <h2>Welcome to Amravati Express</h2>
        <img className="logo" src={logo}></img>

        <div className="login_google" onClick={signIn}>
          <img src="https://img.icons8.com/plasticine/100/000000/google-logo.png" />
          <p> Sign in with google</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
