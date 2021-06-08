import React from "react";
import StateWise from "./StateWise";
import Cards from "./Cards";
import Carousels from "./Carousels";
import "./Main.css";
import Stats from "./Stats";
import { Button } from "@material-ui/core";

function Main() {
  return (
    <div className="main">
      <div className="main_header">
        <h1>Find all shops and services near you</h1>
        <Button className="main_downloadNow">Download app</Button>
      </div>
      <div>
        <img className="main_connected" src="/image/mainConnected.png"></img>
      </div>

      <Stats></Stats>
      <div className="main_downloadRequest">
        <h1>Download the Amravati Express Mobile app</h1>
        <Button
          className="main_downloadNow"
          variant="outlined"
          onClick={() => {
            // setShow(true);
          }}
        >
          Download now
        </Button>
      </div>
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
