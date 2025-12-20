import React, { useContext } from "react";
import { AuthContext } from "../config/AuthContext";
import { FiLogIn} from "react-icons/fi";
import "./userProfile.css";


const UserProfile = () => {
    const{ currentUser } = useContext(AuthContext);

    if (!currentUser) return (
        <div className="p-holder">
           <div className="avatar"><FiLogIn /></div>
           <p>You are not Logged In</p>  

        </div>
    );

    return (
        <div className="user-profile">
            <div className="avatar">{currentUser.displayName?.charAt(0)}</div>
            <div className="info">
                <p className="name">{currentUser.displayName}</p>
                <p className="location">Location Unavailable</p>
            </div>
        </div>
    );

};

export default UserProfile;