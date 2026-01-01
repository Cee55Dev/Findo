import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaFacebookMessenger, FaInstagram, FaCopy } from "react-icons/fa";
import "./Invite.css";

const referralMsg =
  "Join me on Findo! Discover amazing places and share your experiences. Use my link: https://findo.com/referral";

const InvitePage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleShare = (platform) => {
    const encodedMsg = encodeURIComponent(referralMsg);
    let url = "";

    switch (platform) {
      case "WhatsApp":
        url = `https://wa.me/?text=${encodedMsg}`;
        break;
      case "Messenger":
        url = `fb-messenger://share/?link=${encodedMsg}`;
        break;
      case "Instagram":
        url = `https://www.instagram.com/`; // Instagram sharing is limited
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="invite-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <h2 className="invite-title">Invite Friends</h2>

      <div className="referral-message">{referralMsg}</div>
      {copied && <div className="copy-feedback">Copied to clipboard!</div>}

      <div className="share-buttons">
        <button onClick={() => handleShare("WhatsApp")} className="share-btn whatsapp">
          <FaWhatsapp className="icon" /> WhatsApp
        </button>
        <button onClick={() => handleShare("Messenger")} className="share-btn messenger">
          <FaFacebookMessenger className="icon" /> Messenger
        </button>
        <button onClick={() => handleShare("Instagram")} className="share-btn instagram">
          <FaInstagram className="icon" /> Instagram
        </button>
        <button onClick={handleCopy} className="share-btn copy-link-btn">
          <FaCopy className="icon" /> Copy Link
        </button>
      </div>
    </div>
  );
};

export default InvitePage;
