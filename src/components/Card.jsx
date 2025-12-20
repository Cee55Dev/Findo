import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaBookmark, FaRegBookmark ,  } from "react-icons/fa";
import { BsPatchCheckFill, BsPatchCheckFIll } from "react-icons/bs";
import "./Card.css";
import SaveButton from "./buttons/SaveButton";

function Card({ image, altText, name, description, rating, date, type }) {
  const [saved, setSaved] = useState(false);
  

  const slug = name
    ? name.
      toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
    : "unknown";

  const linkTo = 
    type === "event"
    ? `/upComingevents/${slug}`
    :`/spots/${slug}`;

  const toggleSave = (e) => {
    e.preventDefault(); // prevent link navigation
    setSaved(!saved);
  };

  // Generate slug safely for link
  
  return (
    <Link to={linkTo} className="card-link">
      <div className={`card ${type === "recommended" ? "recommended-card" : ""}`}>
        {/* Card Image */}
        <div className="card-image-wrapper">
          <img
            src={image || "https://via.placeholder.com/200x140"}
            alt={altText || name || "Card"}
            className="card-image"
          />

          {/* Save Icon */}
          <SaveButton />
       

        {/* Card Info */}
        <div className="card-info">
          {name && <h3 className="card-name">{name}</h3>}

          {/* Show rating only for spots */}
          {rating !== undefined && type !== "events" && (
            <div className="card-rating">
              <FaStar className="star-icon" />
              <span>{rating}/5</span>
            </div>
          )}

          {/* Show date only for events */}
          {date && type === "events" && (
            <p className="card-date">{new Date(date).toLocaleDateString()}</p>
          )}
          {description && <p className="card-description">{description}</p>}
        </div>
       </div>
      </div>
    </Link>
  );
}

export default Card;
