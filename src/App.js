// import { useState } from "react";
import "./App.css";

import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Carousels from "./Carousels";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import StickyButton from "./StickyButton";
import Footer from "./Footer";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import Explore from "./Explore";
import LoginModal from "./LoginModal";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //  console.log(`the user is : `,authUser);

      if (authUser) {
        // if user has logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        //the user has not logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  // user = "";
  return (
    <div className="app">
      {/* {!user ? (
        <div className="login_outside">
          <div className="app_body">
            <Login></Login>
          </div>
        </div>
      ) : ( */}
      {/* // <h1> you are logged in</h1> */}
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <div className="login_outside">
                <div className="app_body">
                  <Login></Login>
                </div>
              </div>
            </Route>
            <Route path="/explore">
              <Navbar></Navbar>
              <Explore></Explore>
            </Route>

            <Route path="/">
              <Navbar />
              <Main></Main>
              <StickyButton></StickyButton>
              <Footer></Footer>
            </Route>

            {/* <Route exact path="/" component={Main} /> */}
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signup" component={SignUp} /> */}
            {/* <Redirect to="/" /> */}
          </Switch>
        </Router>
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
