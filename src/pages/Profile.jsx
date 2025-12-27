import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHelpCircle, FiInfo, FiLogOut, FiUser, FiShare2, FiLogIn } from "react-icons/fi";
import { useAuth } from "../config/AuthContext"; // adjust path if needed
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); // redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="Page">
      <h3 className="page-title">Profile</h3>

      <div className="menu-content-page">
        <div className="menu-opt" onClick={() => navigate("/profile-page")}>
          <FiUser /> Profile
        </div>
        <div className="menu-opt" onClick={() => navigate("/help-page")}>
          <FiHelpCircle /> Help / FAQ
        </div>
        <div className="menu-opt" onClick={() => navigate("/about-page")}>
          <FiInfo /> About / Info
        </div>
        <div className="menu-opt" onClick={() => navigate("/invite-page")}>
          <FiShare2 /> Invite Friends
        </div>

        {user ? (
          <div className="menu-opt" onClick={handleLogout}>
            <FiLogOut /> Logout
          </div>
        ) : (
          <div className="menu-opt" onClick={() => navigate("/loginsignupuser")}>
            <FiLogIn /> Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
