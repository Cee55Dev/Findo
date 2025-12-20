import { useParams, useNavigate } from "react-router-dom";
import { spots } from "../data/SpotsData";
import Card from "../components/Card";
import "./SeeAllResults.css";

function SeeAllResults() {
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
             {data.map(item => (
                <div 
                key={item.id}
                {...item}
                className="spot-card"
                layout = "vertical" 
                onClick={() => navigate(`/spots/${item.slug}`)}

                > 
                   <img src={item.image} alt={item.altText || item.name} className="spot-image" />
                    <h3 className="cat-spot-name">{item.name}</h3>
                    <p className="cat-bio">
                    {item.description}</p>   
                </div>
                ))}
            </div>
        </div>
         
    );
}

export default SeeAllResults;