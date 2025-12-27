import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import BottomNav from "../components/BottomNav";
import { spots } from "../data/SpotsData";
import "./Home.css";
import UpcomingEvents from "../components/UpComingEvents";
import upcomingEvents from "../data/UpcomingEvents";
import { useNavigate } from "react-router-dom";

/* Shuffle utility */
const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function Home({ onMenuOpen, menuOpen, onMenuClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /* 🔒 Persist shuffle for session only */
  const shuffledSpots = useMemo(() => {
    const saved = sessionStorage.getItem("homeSpots");
    if (saved) return JSON.parse(saved);

    const shuffled = shuffleArray(spots);
    sessionStorage.setItem("homeSpots", JSON.stringify(shuffled));
    return shuffled;
  }, []);

  /* Search filter */
  const searchedSpots = useMemo(() => {
    const text = searchTerm.toLowerCase();

    return shuffledSpots.filter((s) => {
      const nameMatch = s.name?.toLowerCase().includes(text);
      const tagMatch =
        Array.isArray(s.tags) &&
        s.tags.some((tag) => tag.toLowerCase().includes(text));
      const categoryMatch =
        Array.isArray(s.category) &&
        s.category.some((cat) => cat.toLowerCase().includes(text));

      return nameMatch || tagMatch || categoryMatch;
    });
  }, [searchTerm, shuffledSpots]);

  /* Unique allocation (no duplicates across sections) */
  const recommended = [];
  const trending = [];
  const topRated = [];

  searchedSpots.forEach((spot) => {
    if (spot.tags?.includes("recommended") && recommended.length < 10) {
      recommended.push(spot);
    } else if (spot.tags?.includes("trending") && trending.length < 10) {
      trending.push(spot);
    } else if (spot.tags?.includes("topRated") && topRated.length < 10) {
      topRated.push(spot);
    }
  });

  return (
    <div className="home-page">
      <Header onSearch={setSearchTerm} onMenuOpen={onMenuOpen} menuOpen={menuOpen} onMenuClose={onMenuClose} />

      <section className="Upcoming-Evvents">
        <h3>Upcoming Events!</h3>
        <UpcomingEvents events={upcomingEvents} />
      </section>

      <section id="home-content">

            <section>
              <div className="h2p">
                <h2>RECOMMENDED FOR YOU</h2>
                <button onClick={() => navigate("/see-all/recommended")}>
                  see all →
                </button>
              </div>
              <Slider data={recommended} type="recommended" />
            </section>

            <section>
              <div className="h2p">
                <h2>TRENDING THIS WEEK</h2>
                <button onClick={() => navigate("/see-all/trending")}>
                  see all →
                </button>
              </div>
              <Slider data={trending}  type="trending"/>
            </section>

            <section>
              <div className="h2p">
                <h2>TOP RATED</h2>
                <button onClick={() => navigate("/see-all/topRated")}>
                  see all →
                </button>
              </div>
              <Slider data={topRated} type="topRated"/>
            </section>
    </section>
      <BottomNav />
    </div>
  );
}

export default Home;
