import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";
import "./LogOut.css";

const LogoutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const confirmLogout = async () => {
    try {
      await logout();
      navigate("/LoginSignUpUser", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="logout-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Log Out</h2>

      <button className="logout-btn" onClick={() => setShowModal(true)}>
        Log Out
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to log out?</p>

            <button className="logout-btn" onClick={confirmLogout}>
              Yes, Log Out
            </button>

            <button
              className="logout-btn cancel"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutPage;
