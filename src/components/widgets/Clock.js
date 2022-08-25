import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="clock-wrapper" style={{ fontSize: "25px" }}>
      <div className="clock-container">
        <h3>Clock</h3>
        <div className="clock">{clockState}</div>
      </div>

      <div className="move-button">
        <Link to="/widgets">
          <button className="back-widgets">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Clock;
