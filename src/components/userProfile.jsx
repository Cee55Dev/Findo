import React, { useContext } from "react";
import { useAuth } from "../config/AuthContext";
import { FiLogIn} from "react-icons/fi";
import "./userProfile.css";


const UserProfile = () => {
    const { user } = useAuth();

    if (!user) return (
        <div className="p-holder">
           <div className="avatar"><FiLogIn /></div>
           <p>You are not Logged In</p>  

        </div>
    );

    return (
        <div className="user-profile">
            <div className="avatar"> {user.displayName?.charAt(0)  || user.email.charAt(0)}</div>
            <div className="info">
                <p className="name">{user.displayName || user.email}</p>
                <p className="location">Location Unavailable</p>
            </div>
        </div>
    );

};

export default UserProfile;