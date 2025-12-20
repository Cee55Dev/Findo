import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import BottomNav from "../components/BottomNav";
import { spots } from "../data/SpotsData";
import "./Home.css";
import UpcomingEvents from "../components/UpComingEvents";
import  upcomingEvents from "../data/UpcomingEvents";
import { useNavigate } from "react-router-dom";


const shuffleArray = arr => {
  const a = [ ...arr];
  for (let i = a.length - 1; i > 0; i --) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]; 
  }
  return a;
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // shuffle once
  const [shuffledSpots, setShuffledSpots] =  useState(() => {
    const saved = localStorage.getItem("homeSpots");
    if (saved) return JSON.parse(saved);
    const shuffled = shuffleArray(spots);
    localStorage.setItem("homeSpots",  JSON.stringify(shuffled));

    return shuffled;

  })



  const navigate = useNavigate();


  // Filter + search
  const searchedSpots = useMemo(() => {
    const text = searchTerm.toLowerCase ();
    return shuffledSpots.filter((s) => {
      const nameMatch = s.name.toLowerCase().includes(text);
      const tagMatch =  Array.isArray (s.tags) && s.tags.some(tag =>
         typeof tag === "string" && tag.toLowerCase().includes(text)
        );
      const categoryMatch = Array.isArray( s.category)  && s.category.some(cat => typeof cat === "string" && cat.toLowerCase().includes(text));

      return nameMatch || tagMatch || categoryMatch ;
    });
  }, [searchTerm, shuffledSpots]);
  // Category filters inside the function
  const recommended = searchedSpots.filter(s => s.tags?.includes("recommended"));
  const trending = searchedSpots.filter(s => s.tags?.includes("trending"));
  const topRated = searchedSpots.filter(s => s.tags?.includes("topRated"));

  return (
    <div className="home-page">
      <Header onSearch={setSearchTerm} />

      <section id="Upcoming-Events">
        <h3>Upcoming Events !</h3>
        <UpcomingEvents  events={upcomingEvents} title="Upcoming Events" />
      </section>

      <section id="Recommended-For-You-section">
       <div className="h2p">
          <h2>RECOMMENDED FOR YOU</h2>
          <button
            className="see-all"
            onClick={() => navigate(`/see-all/trending`)}>see all →</button>
        </div>
        <Slider title="Recommended" data={recommended} />
      </section>

      <section id="Trending-Week">
        <div className="h2p">
          <h2>TRENDING THIS WEEK</h2>
          <button
           className="see-all"
           onClick={() => navigate(`/see-all/trending`)}>see all →</button>
        </div>
        <Slider title = "Trending" data={trending}/>
      </section>

      <section id="TopRated-Places">
        <div className="h2p">
          <h2>TOP RATED</h2>
          <button
            className="see-all"
            onClick={() => navigate(`/see-all/topRated`)}>see all →</button>
        </div>
        <Slider title = "TopRated" data={topRated}/>
      </section>

      <BottomNav />
    </div>
  );
}

export default Home;
