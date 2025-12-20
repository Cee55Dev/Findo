import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories";
import "./Discover.css";

function Discover() {
  const navigate = useNavigate();

  return (
    <div className="discover-page">
      <h2 className="discover-title">Categories</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div
            key={index} // use index or cat.name
            className="category-card"
            onClick={() => navigate(`/discover/${cat.category}`)} // match category in spots
          >
            <div className="cat-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
