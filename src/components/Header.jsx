import React from "react";
import {  FaBell } from "react-icons/fa";
import UserProfile from "./userProfile";
import "./Header.css";

function Header({ onSearch , showSearch = true }) {
  const handleSearch = (e) => {
    if(onSearch) onSearch(e.target.value);
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="user-corner">
          <UserProfile />         
        </div>
      
        <div className="notification-icon">
          <FaBell size={35} />
        </div>
      </div>

      { showSearch && (
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search by name , category, or tag..."
          onChange={handleSearch}
        />
      </div>
      )}
    </header>
  );
}

export default Header;
