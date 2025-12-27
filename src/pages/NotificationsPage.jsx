import React from "react";
import "./NotificationsPage.css";

function NotificationsPage({ user }) {
  return (
    <div className="notifications-page">
      <h2>Notifications</h2>

      {!user && (
        <p className="notifications-empty">
          Sign in to see your notifications
        </p>
      )}

      {user && (
        <ul className="notifications-list">
          <li className="notification-item">
            🎉 Welcome to Findo!
          </li>
          <li className="notification-item">
            🔥 New spots added near you
          </li>
          <li className="notification-item">
            📍 Upcoming events this weekend
          </li>
        </ul>
      )}
    </div>
  );
}

export default NotificationsPage;
