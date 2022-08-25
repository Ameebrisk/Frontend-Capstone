import { useState } from "react";
import { Link } from "react-router-dom";

export default function ColorChanger() {
  const [color, setColor] = useState("navy blue");
  const [message, setMessage] = useState("navy blue");

  function handleSubmit(e) {
    e.preventDefault();

    setColor("");
    setMessage(e.target.color.value);
  }

  return (
    <div className="color-wrapper">
      <div className="color">
        <h2>Color Changer</h2>
        <h1>{message && message[0].toUpperCase() + message.slice(1)}</h1>
      </div>

      <form onSubmit={handleSubmit} className="color-form">
        <input
          name="color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="color-change">Change Color </button>
      </form>

      <div className="move-button">
        <Link to="/widgets">
          <button className="back-widgets">Back</button>
        </Link>
      </div>
    </div>
  );
}
