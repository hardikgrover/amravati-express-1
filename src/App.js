// import { useState } from "react";
import "./App.css";
// import {
//   Redirect,
//   Route,
//   BrowserRouter as Router,
//   Switch,
// } from "react-router-dom";

import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Carousels from "./Carousels";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user = "";
  return (
    <div className="app">
      {!user ? (
        <div className="login_outside">
          <div className="app_body">
            <Login></Login>
          </div>
        </div>
      ) : (
        // <h1> you are logged in</h1>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signup" component={SignUp} /> */}
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
