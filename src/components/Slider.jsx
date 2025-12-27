import React, { useEffect, useRef } from "react";
import Card from "./Card";
import "./Slider.css";

function Slider({ data = [], type }) {
  const sliderRef = useRef(null);

  // restore scroll
  useEffect(() => {
    const key = `slider-scroll-${type}`;
    const savedScroll = sessionStorage.getItem(key);

    if (savedScroll && sliderRef.current) {
      sliderRef.current.scrollLeft = Number(savedScroll);
    }

    return () => {
      if (sliderRef.current) {
        sessionStorage.setItem(
          key,
          sliderRef.current.scrollLeft
        );
      }
    };
  }, [type]);

  return (
    <div className="slider-container" ref={sliderRef}>
      {data.map((item) => (
        <Card key={item.id} {...item}
        showDescription = { false } />
      ))}
    </div>
  );
}

export default Slider;
