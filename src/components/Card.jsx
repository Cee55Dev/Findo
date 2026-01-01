import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa"; // Placeholder icon
import StarRating from "./stars";
import SaveButton from "./buttons/SaveButton";
import "./Card.css";

function Card({
  image,
  altText,
  name,
  description,
  rating,
  date,
  type,
  categories = [],
  tags = [],
  showDescription = true,
}) {
  const [saved, setSaved] = useState(false);

  const slug = name
    ? name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
    : "unknown";

  const linkTo =
    type === "event" ? `/upComingevents/${slug}` : `/spots/${slug}`;

  const toggleSave = (e) => {
    e.preventDefault();
    setSaved(!saved);
  };

  // Determine the image URL (first in array or single string)
  const imageUrl = Array.isArray(image) ? image[0] : image;

  return (
    <Link to={linkTo} className="card-link">
      <div className={`card ${type === "recommended" ? "recommended-card" : ""}`}>
        <div className="card-image-wrapper">
          {/* Card Image or Placeholder */}
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={altText || name || "Card"}
              loading="lazy"
              onError={(e) => e.target.style.display = "none"} // hide broken image
              onLoad={(e) => e.target.classList.add("loaded")}
              className="card-image"
            />
          ) : (
            <div className="placeholder-icon">
              <FaMapMarkerAlt size={40} color="#888" />
            </div>
          )}

          {/* Save Icon */}
          <SaveButton saved={saved} onClick={toggleSave} />

          {/* Card Overlay */}
          <div className="overlay">
            <div className="card-info">
              {/* Name */}
              {name && <h3 className="card-name">{name}</h3>}

              {/* Categories */}
              {categories.length > 0 && (
                <div className="card-categories">
                  {categories.map((cat, i) => (
                    <span key={i} className="category-pill">{cat}</span>
                  ))}
                </div>
              )}

              {/* Tags */}
              {tags.length > 0 && (
                <div className="card-tags">
                  {tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>
              )}

              {/* Rating (only for spots) */}
              {rating != null && type !== "event" && (
                <div className="card-rating">
                  <StarRating rating={rating} />
                </div>
              )}

              {/* Date (only for events) */}
              {date && type === "event" && (
                <p className="card-date">{new Date(date).toLocaleDateString()}</p>
              )}

              {/* Description */}
              {showDescription && description && (
                <p className="card-description">{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
