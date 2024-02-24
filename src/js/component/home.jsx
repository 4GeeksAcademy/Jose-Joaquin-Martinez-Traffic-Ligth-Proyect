import React from "react";
import TrafficLight from "./trafficLight";
import "./../../styles/index.css";
import { useState } from "react";

/* La luz tiene que brillar cuando se hace clic.
Todo el propósito del componente es mostrar un semáforo con luces de lectura,
amarillas y verdes.
Cuando se hace clic (se selecciona) alguna luz, 
ésta debe brillar, pero las otras luces deben dejar de brillar.

🔥 Bonus
2 Crea un botón que, al hacer clic en él, 
alterna el color seleccionado del semáforo entre rojo, verde y amarillo.

10 Tener un botón que al hacer clic en él anuncie un color extra "púrpura" 
al semáforo.
 */
//create your first component
const Home = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="main-container">
      <div className="top-pole"></div>
      <TrafficLight />
    </div>
  );
};

export default Home;
