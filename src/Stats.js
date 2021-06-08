import React from "react";
import { useState } from "react";
import "./Stats.css";
function Stats() {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = 200;
    let increamentTime = 4;

    let timer = setInterval(() => {
      start += 1;
      setCount;
    });
    if (start === end) return;
  }, [number, duration]);
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
