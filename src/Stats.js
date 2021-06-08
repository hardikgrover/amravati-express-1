import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Stats.css";
function Stats() {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = 200;
    let increamentTime = 100;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start == end) clearInterval(timer);
    }, increamentTime);
    if (start === end) return;
  }, []);
  return (
    <div className="stats">
      <div className="stats_option">
        <h4>100k+</h4>
        <p>Shops Connected</p>
      </div>
      <div className="stats_option">
        <h4>{count}</h4>
        <p>Services Connected</p>
      </div>
      <div className="stats_option">
        <h4>100k+</h4>
        <p>Happy Customers</p>
      </div>
    </div>
  );
}

export default Stats;
