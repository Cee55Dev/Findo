import React from "react";
import { FiHeart, FiMessageCircle, FiBookmark, FiTool} from "react-icons/fi";
import { spots } from "../data/SpotsData"; // make sure this path is correct
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed-page">
      {spots.map((spot) => (
        <div className="feed-item" key={spot.id}>
          <img
            src={Array.isArray(spot.image) ? spot.image[0] : spot.image}
            alt={spot.name}
            className="feed-image"
          />

          <div className="feed-overlay">
            <h2 className="spot-name">{spot.name}</h2>
            <div className="spot-actions">
              <div className="action">
                <FiHeart size={24} />
                <span>220</span>
              </div>
              <div className="action">
                <FiMessageCircle size={24} />
                <span>120</span>
              </div>
              <FiBookmark size={24} className="bookmark" />
            </div>
          </div>
        </div>
      ))}

      <div className="pop-up">
        <div className="set-icon">
          <FiTool size={28} />
        </div>
        <h3>Page is still under development</h3>
        <p>Thank you for your continued patience and support</p>
      </div>
    </div>
  );
};

export default Feed;
