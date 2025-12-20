import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import FollowButton from "../components/buttons/FollowButton";
import Slider from "../components/Slider";
import { spots } from "../data/SpotsData";
import upcomingEvents from "../data/UpcomingEvents";
import "./SpotDetails.css";
import UpcomingEvents from "../components/UpComingEvents";
import SaveButton from "../components/buttons/SaveButton";
import { BsPatchCheckFill } from "react-icons/bs";

function SpotDetails() {
  const { spotSlug } = useParams();

  useEffect(() => {
    const container = document.querySelector(".app-container");
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  }, [spotSlug]);
  
 
  const navigate = useNavigate();
  //Find the current spot baba
  const spot = spots.find((s => s.slug === spotSlug));

  if (!spot) return <div>Spot not found</div>;
  //Filter upcoming events by slug 
  const spotEvents = upcomingEvents.filter(
    (event) => event.spotSlug === spot.slug);

  const similar = spots.filter(
      (s) => 
        s.id !== spot.id  &&
        s.category.some(cat => spot.category.includes(cat))    
    );
  console.log("Similar spots:", similar)


  if (!similar) return <div>No similar spots</div>

  
 
  return (
      <div className="spot-details">
        {/* Image with back + save buttons */}
        <div className="spot-image-container">
          <img src={spot.image} alt={spot.altText} className="spot-image" />
          <button className="back-button" onClick={() => navigate(-1)}>
            Back
          </button>
          
            <SaveButton />
          
        </div>

        {/* Name and description */}
        <div className="spotDescription">
            <div className="spot-Name">
              <h2>{spot.name}</h2>
              <div className="spotDetails-icon">
                <BsPatchCheckFill /> 
                <p>verified on .....</p>
              <div/>
            </div>
            <p className="spot-description">{spot.description}</p>
            <p><strong>Rating:</strong> {spot.rating} ⭐</p>
            <FollowButton />
        </div>

        {/* Events Slider */}
       <div className="events-section">
            <h3>Upcoming Events</h3>
            <UpcomingEvents events={spotEvents}  />
        </div>

        {/* Spot details section */}
        <div className="spot-details-section">
          <p><strong>Address:</strong> {spot.address}</p>
          <p><strong>Phone:</strong> {spot.phone}</p>
          <p><strong>Hours:</strong> {spot.hours}</p>
          <p><strong>Website:</strong> {spot.website}</p>
          {spot.menu.length > 0 && (
            <div>
              <h3>Menu</h3>
              <ul>
                {spot.menu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        

        {/* Buttons */}
        <div className="spot-buttons">
          <button className="book-button">BOOK A RIDE </button>
          <button className="direction-button">DIRECTIONS</button>
        </div>
        </div>
        </div>
        <div className="Similar-spots-section">
            <h2>Similar Spots</h2>
            <div className="Similar-section">
             <Slider data={similar} title="Similar Spots"/>
            </div>
        </div>
      
    </div>
  ); 
}

export default SpotDetails;
