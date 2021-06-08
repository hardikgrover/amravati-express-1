import React from "react";
import StateWise from "./StateWise";
import Cards from "./Cards";
import Carousels from "./Carousels";
import "./Main.css";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import Stats from "./Stats";

function Main() {
  return (
    <div className="main">
      <div className="main_header">
        <h1>Find all shops and services near you</h1>
        <button className="main_download">Download app</button>
      </div>
      <Stats></Stats>
    </div>
  );
}

export default Main;
{
  /* <Carousels/>
             {/* main div including cards */
}
{
  /* <Cards/> */
}

{
  /* india api */
}
{
  /* <div className="text-center">
                 <h1 className="abc">INDIA COVID DATA</h1>
             </div> */
}
{
  /* <StateWise/>  */
}
