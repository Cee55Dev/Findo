import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FiX, FiInfo } from "react-icons/fi";
import upcomingEvents from "../data/UpcomingEvents";
import "./EventDetails.css";

function EventDetails() {
  const [open, setOpen] = useState(false);
  const { eventSlug } = useParams();

  const event = upcomingEvents.find((e) => e.slug === eventSlug);

  if (!event) return <div>Event Not Found</div>;

  return (
    <div className="event-details">
      <div className="event-info">
        <img
          src={event.image}
          alt={event.name}
          className="event-image"
        />

        {/* Info Icon */}
        <button
          className="info-btn"
          onClick={() => setOpen(true)}
          aria-label="More info"
        >
          <FiInfo size={20} />
        </button>

        <button className="buy-ticket">Buy Tickets +</button>
      </div>

      {/* Info Panel */}
      {open && (
        <div className="event-overlay" onClick={() => setOpen(false)}>
          <div className="event-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              <FiX size={35} />
            </button>

            <h1 className="event-name">{event.name}</h1>
            <p className="event-date"><span className="event-datee">Date:</span>{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetails;
