import React from "react";

import { useParams } from "react-router-dom";
import  upcomingEvents from "../data/UpcomingEvents";
import "./EventDetails.css";


function EventDetails () {
    const{ eventSlug } = useParams();

    const event = upcomingEvents.find(e => e.slug === eventSlug);

    if (!event) return <div>Event Not Found</div>

    return (
        <div className="event-details">
            <div className="event-info">
                <img src = {event.image} alt={event.name}  className="event-image"/>
                <button className="buy-ticket">Buy Tickets +</button>
            
            <div className="event-content">
                <h1>{event.name}</h1>
                <p>Date: {event.date}</p>
                <p>{event.description}</p>
            </div>
            </div>
        </div>
    );
}

export default EventDetails;