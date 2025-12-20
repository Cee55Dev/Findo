import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";
import { TbPhotoVideo } from "react-icons/tb";
import { FaHome, FaBell, FaUser } from "react-icons/fa";

function BottomNav() {

  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link
       to="/home"
       className={`nav-item ${location.pathname === "/home" ? "active" : ""}`}
       >
      <FaHome className="icon"/>
      </Link>
          
      <Link
       to="/discover"
       className={`nav-item ${location.pathname === "/discover" ? "active" : ""}`}
       >
      <FaBell className="icon"  />
      </Link>

      <Link
       to="/feed"
       className={`nav-item ${location.pathname === "/feed" ? "active" : ""}`}
       >
      <TbPhotoVideo className="icon" />
      </Link>
          

      <Link
       to="/profile"
       className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}
       >
      <FaUser className="icon" size={24} />
      </Link>         
    </nav>
  );
}

export default BottomNav;
