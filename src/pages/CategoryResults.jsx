import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { spots } from "../data/SpotsData";
import "./CategoryResults.css";

function CategoryResults() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredSpots = spots.filter(spot =>
    spot.category.includes(categoryName)
  );

  return (
    <div className="category-results-page">
      <h2 className="category-title">{categoryName}</h2>

      <div className="spots-grid">
        {filteredSpots.length > 0 ? (
          filteredSpots.map(spot => (
            <div
              key={spot.id}
              className="spot-card"
              onClick={() => navigate(`/spots/${spot.slug}`)} // use slug here
            >
              <img src={spot.image} alt={spot.altText || spot.name} className="spot-image" />
                <h3 className="cat-spot-name">{spot.name}</h3>
                <p className="cat-bio">
                  {spot.description}</p>
              
              
            </div>
          ))
        ) : (
          <p>No spots found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryResults;
