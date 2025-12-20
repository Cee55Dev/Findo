import React from "react";
import Card from "./Card";
import "./Slider.css";

function Slider({ data = [] , type }) {
  return (
    <div className="slider-container">
      {data.map((item, index) => (
        <Card
          key={item.id}
          {...item}
        />
          
      ))}
    </div>
  );
}

export default Slider;
