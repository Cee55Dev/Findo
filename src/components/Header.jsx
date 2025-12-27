import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import UserProfile from "./userProfile";
import NotificationIcon from "./buttons/notificationIcon";
import { useAuth } from "../config/AuthContext"; 
import "./Header.css";

function Header({ onSearch, showSearch = true, onMenuOpen, menuOpen, onMenuClose }) {
  const { user } = useAuth();

  const handleSearch = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="user-corner">
          <UserProfile />
        </div>

        <div className="header-right">
          <button className="menu-btn" onClick={menuOpen ? onMenuClose : onMenuOpen}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          <div className="notification-icon">
            <NotificationIcon user={user} />
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name, category, or tag..."
            onChange={handleSearch}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
