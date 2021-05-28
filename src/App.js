import React from "react"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Carousels from './Carousels';
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

     {/* carousel */}
     {/* <Carousels/> */}
    
     <Switch>
       <Route exact path="/" component={Main} />
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/signup" component={SignUp} />
       <Redirect to="/" />
     </Switch>
 
    </div>
  );
}

export default App;
