import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaCocktail,
  FaHotel,
  FaDumbbell,
  FaHospital,
  FaGamepad,
  FaCut,
  FaTree,
  FaCoffee,
  FaSwimmingPool,
  FaMusic,
  FaCalendarAlt
} from "react-icons/fa";

import categories from "../data/categories";
import "./Discover.css";

const categoryIcons = {
  "Upcoming Events": <FaCalendarAlt />,
  Restaurants: <FaUtensils />,
  Bars: <FaCocktail />,
  Nightclubs: <FaMusic />,
  Hotels: <FaHotel />,
  Gyms: <FaDumbbell />,
  Clinics: <FaHospital />,
  "Game Arenas": <FaGamepad />,
  Salons: <FaCut />,
  Parks: <FaTree />,
  Lounges: <FaCocktail />,
  Cafes: <FaCoffee />,
  Resorts: <FaSwimmingPool />,
};

function Discover() {
  const navigate = useNavigate();

  return (
    <div className="discover-page">
      <h2 className="discover-title">Categories</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate(`/discover/${cat.category}`)}
          >
            <div className="cat-icon">{categoryIcons[cat.name]}</div>
            <div className="cat-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
