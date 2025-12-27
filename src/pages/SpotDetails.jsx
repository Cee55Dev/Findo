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
import { BsFillStarFill, BsPatchCheckFill } from "react-icons/bs";
import { FiStar, FiInfo } from "react-icons/fi";
import SpotDetailsTabs from "../components/spotDetailsTabs";
import StarRating from "../components/stars";

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
          <div className="spot-info-top">
            <div className="spot-info">
                <h2>{spot.name}</h2>
                <div className="tags">
                   {Array.isArray(spot.category) && spot.category.map((cat, index) => (
                    <span key={index} className="tag">{cat}</span>
                       ))}
                </div>

                <StarRating rating={spot.rating} />

            </div>
            <div className="spot-info">
              <p className="status"><FiInfo />unclaimed</p>
            </div>    
             
          </div>
        </div>           
        {/* Spot details section */}
        <SpotDetailsTabs />

        <div className="Events-section">
          <h3>UPCOMING EVENTS !</h3>
          <div className="events-slider">
             <UpcomingEvents  events={spotEvents}/>
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
