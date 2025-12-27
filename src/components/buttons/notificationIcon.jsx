import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

function NotificationIcon() {
  const navigate = useNavigate();

  return (
    <button
      className="notification-button"
      onClick={() => navigate("/notifications")}
    >
      <FaBell size={30} />
    </button>
  );
}

export default NotificationIcon;
