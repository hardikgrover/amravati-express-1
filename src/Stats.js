import React from "react";
import { useState } from "react";
import "./Stats.css";
function Stats() {
  const [count, setCount] = useState("0");
  return (
    <div className="stats">
      <div className="stats_option">
        <h4>100k+</h4>
        <p>Shops connected</p>
      </div>
      <div className="stats_option">
        <h4>{count}</h4>
        <p>Shops connected</p>
      </div>
      <div className="stats_option">
        <h4>100k+</h4>
        <p>Shops connected</p>
      </div>
    </div>
  );
}

export default Stats;
