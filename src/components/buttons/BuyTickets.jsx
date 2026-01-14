import React, { useState } from "react";
import "./BuyTickets.css";

function BuyTicketButton({ label = "Buy Tickets +", comingSoon = false }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (comingSoon) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // hide after 3s
    } else {
      console.log("Buy Tickets clicked"); // replace with real logic
    }
  };

  return (
    <div className="buy-ticket-wrapper">
      <button
        className={`buy-ticket ${comingSoon ? "coming-soon" : ""}`}
        onClick={handleClick}
      >
        {comingSoon && <span className="lock">🔒</span>} {label}
      </button>

      {showMessage && comingSoon && (
        <div className="coming-soon-message">
          This feature is coming soon! 
        </div>
      )}
    </div>
  );
}

export default BuyTicketButton;
