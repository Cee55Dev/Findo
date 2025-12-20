import React  from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";


function Events( ){

    return(
        <div className="home-page">
                <div className="events-slider">
                    <div className="Event">
                        <div className="host-name">Hosted by: <span className="hh">ChopChop</span></div>
                        <img src="/assets/pictures/Event1.jpg" alt="User" className="event-image"/>
                    </div>

                    <div className="Event">
                        <div className="host-name">Hosted by: <span className="hh">The Q_BAR</span></div>
                        <img src="/assets/pictures/Event2.jpg" alt="User" className="event-image"/>
                    </div>

                        
                    <div className="Event">
                        <div className="host-name">Hosted by: <span className="hh">CLUBZONE</span></div>
                        <img src="/assets/pictures/Event3.jpg" alt="User" className="event-image"/>
                    </div>
                    </div>
        </div>
    );


}

export default Events;