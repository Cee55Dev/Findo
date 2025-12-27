import { useState } from "react";
import { spots } from "../data/SpotsData";
import { useParams } from "react-router-dom";
import "./spotDetailsTabs.css";

const SpotDetailsTabs = ({}) => {

  const [activeTab, setActiveTab] = useState("about");

  const { spotSlug } = useParams();

  const spot = spots.find((s => s.slug === spotSlug));

  // Early return if spot is not loaded yet
  if (!spot) return <p>Loading spot details...</p>;

  // Build dynamic tabs based on available data
  const tabs = ["about", "location", "contact"];
  if (Array.isArray(spot.menu) && spot.menu.length > 0) {
    tabs.splice(2, 0, "menu"); // insert "menu" before contact
  }

  return (
    <div className="spot-details-tabs">
      {/* Tab buttons */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === "about" && (
          <p>{spot.description || "No description available."}</p>
        )}

        {activeTab === "location" && (
          <p>{spot.address || "Location not available."}</p>
        )}

        {activeTab === "menu" && Array.isArray(spot.menu) && spot.menu.length > 0 && (
          <ul>
            {spot.menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "contact" && (
          <div className="contact-buttons">
            {spot.phone ? (
              <>
                <a href={`tel:${spot.phone}`} className="contact-btn">
                  📞 Call
                </a>
                <a
                  href={`https://wa.me/${spot.phone.replace(/\D/g, "")}?text=Hi!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn whatsapp"
                >
                  💬 WhatsApp
                </a>
              </>
            ) : (
              <p>No contact info available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotDetailsTabs;
