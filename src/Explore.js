import React from "react";
import Cards from "./Cards";
import Carousels from "./Carousels";
import StateWise from "./StateWise";

function Explore() {
  return (
    <div>
      <Carousels></Carousels>
      {/* <h1>hey there</h1> */}
      <Cards></Cards>
      <StateWise></StateWise>
    </div>
  );
}

export default Explore;
