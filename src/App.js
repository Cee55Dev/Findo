import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./config/AuthContext";
import Home from "./pages/Home";
import SpotDetails from "./pages/SpotDetails";
import Discover from "./pages/Discover";
import CategoryResults from "./pages/CategoryResults";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";
import LoginSignUp from "./pages/LoginSignUpUser";
import Feed from "./pages/feed";
import EventDetails from "./pages/EventDetails";
import SeeAllResults from "./pages/SeeAllResults";

function App() {

  return (
    <AuthProvider>
        <Router>
        <div className="app-container" style={{ paddingBottom: "70px" }}>
          <Routes>
            <Route path="/Home" element={<Home />} />

            {/* MUST USE spotSlug */}
            
            <Route path="/spots/:spotSlug" element={<SpotDetails />} />
            <Route path="/upcomingevents/:eventSlug" element={<EventDetails/>} />
            <Route path="/see-all/:section" element={<SeeAllResults />} />

            <Route path="/discover" element={<Discover />} />
            <Route path="/discover/:categoryName" element={<CategoryResults />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/loginsignupuser"  element={<LoginSignUp />} />
            <Route path="/feed"  element={<Feed />} />
          </Routes>
        </div>

        <BottomNav />
      </Router>
    </AuthProvider>
  );
}

export default App;
