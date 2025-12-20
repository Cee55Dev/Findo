import React from "react";
import Slider from "./Slider";

import "./UpcomingEvents.css"

function  UpcomingEvents ({ events , title = "Upcoming Event" }) {
    if (!events || events.length === 0 ) {
        return <p>No upcoming Events</p>;
    } 

    return (
        <div className="Upcoming-Events">
            <Slider data={events} title={title} />
        </div>
    );
}

export default UpcomingEvents;