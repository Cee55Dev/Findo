import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";
import "./Menu.css";
import {
  FiHelpCircle,
  FiInfo,
  FiLogOut,
  FiUser,
  FiShare2,
  FiX
} from "react-icons/fi";

const Menu = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!open) return null;

  return (
    <>
      <div className="menu-backdrop" onClick={onClose}></div>

      <div className="side-menu open">
        <button className="close-btn" onClick={onClose}>
          <FiX size={24} />
        </button>

        <p className="p-menu">MENU</p>

        <div className="menu-content">
          <div className="menu-opt" onClick={() => { onClose(); navigate("/profile-page"); }}>
            <FiUser /> Profile
          </div>

          {!user && (
            <div className="menu-opt" onClick={() => { onClose(); navigate("/loginsignupuser"); }}>
              <FiUser /> Login
            </div>
          )}

          <div className="menu-opt" onClick={() => { onClose(); navigate("/help-page"); }}>
            <FiHelpCircle /> Help / FAQ
          </div>

          <div className="menu-opt" onClick={() => { onClose(); navigate("/about-page"); }}>
            <FiInfo /> About / Info
          </div>

          <div className="menu-opt" onClick={() => { onClose(); navigate("/invite-page"); }}>
            <FiShare2 /> Invite Friends
          </div>

          {user && (
            <div className="menu-opt" onClick={() => { onClose(); navigate("/logout-page"); }}>
              <FiLogOut /> Logout
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
