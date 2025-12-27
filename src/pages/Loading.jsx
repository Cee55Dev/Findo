import { useState, useEffect } from "react";
import "./Loading.css";

const rotatingWords = ["Bar", "Restaurant", "Lounge", "Gym", "Salon", "Game Arena"];

export default function Loading() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 1000); // change word every 1s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <h1>Findo</h1>
      <div className="spinner"></div>
      <p className="loading-text">
        Find your new favorite <span className="rotating-word">{rotatingWords[currentWord]}</span>
      </p>
    </div>
  );
}
