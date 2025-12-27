import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./config/AuthContext";

import Home from "./pages/Home";
import SpotDetails from "./pages/SpotDetails";
import Discover from "./pages/Discover";
import CategoryResults from "./pages/CategoryResults";
import Profile from "./pages/Profile";
import LoginSignUp from "./pages/LoginSignUpUser";
import Feed from "./pages/feed";
import EventDetails from "./pages/EventDetails";
import SeeAllResults from "./pages/SeeAllResults";
import NotificationsPage from "./pages/NotificationsPage";
import Loading from "./pages/Loading";
import BottomNav from "./components/BottomNav";
import Menu from "./components/buttons/Menu";

import {
  ProfilePage,
  HelpPage,
  AboutPage,
  InvitePage,
  LogoutPage
} from "./components/menu-pages";

function AppContent() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Menu open={menuOpen} onClose={closeMenu} />

      <div className="app-container" style={{ paddingBottom: "70px" }}>
        <Routes>
          <Route
            path="/home"
            element={<Home onMenuOpen={openMenu} menuOpen={menuOpen} onMenuClose={closeMenu} />}
          />
          <Route path="/spots/:spotSlug" element={<SpotDetails />} />
          <Route path="/upcomingevents/:eventSlug" element={<EventDetails />} />
          <Route path="/see-all/:section" element={<SeeAllResults />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/:categoryName" element={<CategoryResults />} />
          <Route
            path="/profile"
            element={<Profile onMenuOpen={openMenu} menuOpen={menuOpen} onMenuClose={closeMenu} />}
          />
          <Route path="/loginsignupuser" element={<LoginSignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/help-page" element={<HelpPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/invite-page" element={<InvitePage />} />
          <Route path="/logout-page" element={<LogoutPage />} />
          <Route path="/notifications" element={<NotificationsPage user={user} />} />

          {/* Default redirect to Home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>

      <BottomNav onProfileClick={openMenu} />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000); // 8-second loading demo
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
