import { useParams, useNavigate } from "react-router-dom";
import { spots } from "../data/SpotsData";

import "./SeeAllResults.css";

function SeeAllResults({image, description}) {
    const { section } = useParams();
    const navigate = useNavigate ();


    let data = [];

    if (section === "recommended") {
        data = spots.filter ((s) => s.tags?.includes("recommended"));
    } else if(section === "trending") {
        data = spots.filter((s) => s.tags?.includes("trending"));
    }else if (section === "topRated") {
        data = spots.filter((s) => s.tags?.includes("topRated"))
    }

    return (
        <div className="vertical-feed">
            <h2 className="feed-title">{ section }</h2>

            <div className="spots-grid">
             {data.map(spot => (
                <div 
                key={spot.id}
                {...spot}
                className="spot-card"
                layout = "vertical" 
                onClick={() => navigate(`/spots/${spot.slug}`)}

                > 
                <img
                    src={Array.isArray(spot.image) ? spot.image[0] : image || "https://via.placeholder.com/200x140"}
                    alt={spot.altText || spot.name}
                    className="spot-image"
                />

                    <h3 className="cat-spot-name">{spot.name}</h3>
                    <p className="cat-bio">
                    {spot.description}</p>   
                </div>
                ))}
            </div>
        </div>
         
    );
}

export default SeeAllResults;