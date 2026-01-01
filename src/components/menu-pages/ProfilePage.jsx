import React from "react";
import { useAuth } from "../../config/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const avatarLetter =
    user?.displayName?.charAt(0).toUpperCase() ||
    user?.email?.charAt(0).toUpperCase() ||
    "U";

  // If not logged in, show login button
  if (!user) {
    return (
      <div className="profile-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <h2>Profile</h2>
        <p>You are not logged in.</p>
        <button
          className="login-btn"
          onClick={() => navigate("/loginsignupuser")}
        >
          Log In / Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          {user.photoURL ? <img src={user.photoURL} alt="Profile" /> : <span>{avatarLetter}</span>}
        </div>
        <div className="profile-info">
          <h3>{user.displayName || "Findo User"}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Saved Spots Section */}
      <section className="profile-section">
        <h4>Saved Spots</h4>
        <p className="muted">You haven’t saved any spots yet.</p>
      </section>

      {/* Preferences Section */}
      <section className="profile-section">
        <h4>Preferences</h4>
        <p className="muted">Personalization settings coming soon.</p>
      </section>
    </div>
  );
};

export default ProfilePage;
