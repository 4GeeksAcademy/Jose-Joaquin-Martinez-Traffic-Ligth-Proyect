import React, { useState } from "react";
import "./../../styles/trafficLight.css";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [showAddColorButton, setShowAddColorButton] = useState(false);

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
    setShowAddColorButton(true);
  };

  const randomColor = () => {
    const colors = ["red", "orange", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setShowAddColorButton(true);
  };

  const addColor = () => {
    setColor("purple");
    setShowAddColorButton(!showAddColorButton);
  };

  return (
    <div className="light-container">
      <button
        className={color === "red" ? "red-light red-selected" : "red-light"}
        onClick={() => handleClick("red")}
      ></button>
      <button
        className={
          color === "orange" ? "orange-light orange-selected" : "orange-light"
        }
        onClick={() => handleClick("orange")}
      ></button>
      <button
        className={
          color === "green" ? "green-light green-selected" : "green-light"
        }
        onClick={() => handleClick("green")}
      ></button>
      {showAddColorButton && (
        <button
          className="purple-light purple-selected"
          onClick={() => addColor()}
        ></button>
      )}
      <button className="color-changing-btn" onClick={() => randomColor()}>
        Random color
      </button>

      <button className="add-purple-color-btn" onClick={() => addColor()}>
        Try me
      </button>
    </div>
  );
};
export default TrafficLight;
