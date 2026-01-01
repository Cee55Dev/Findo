import React from "react";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="help-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <h1>About Findo</h1>
      <p className="intro-text">
        Findo helps you discover, save and share the best spots in your city. Our mission is to connect people with places and experiences they love.
      </p>

      <section className="about-section">
        <h2>Mission</h2>
        <p>
          To make exploring your city easy and fun by providing a curated experience of restaurants, bars, cafes, gyms, and upcoming events.
        </p>

        <h2>Vision</h2>
        <p>
          To become the go-to platform for discovering local spots and hidden gems while connecting communities through shared experiences.
        </p>

        <h2>Core Features</h2>
        <ul>
          <li>Discover nearby spots with ratings and reviews.</li>
          <li>Save your favorite spots for easy access.</li>
          <li>See trending and recommended places.</li>
          <li>Get notified about upcoming events.</li>
          <li>Share spots and invite friends to join Findo.</li>
        </ul>

        <div className="notice-box">
          Note: Some sections such as the Feed and certain event features are still under development. Expect limited content and placeholder screens in these areas.
        </div>

        <h2>Version & Contact</h2>
        <p>Version: 2.0.0</p>
        <p>Contact: <a href="mailto:info@findo.com">info@findo.com</a></p>
      </section>
    </div>
  );
};

export default AboutPage;
