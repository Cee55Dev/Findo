import React from "react";
import {useState} from "react" ;
import "./FollowButton.css";
import { FiUserPlus , FiUserCheck } from "react-icons/fi";



function FollowButton (){
    const[isFollowing , setIsFollowing] = useState (false);

    const handleClick = () => {
        setIsFollowing(!isFollowing); //toggle states
    };

    return (
        <button 
            onClick={handleClick}
            className={isFollowing ? "Following" : "Follow"}
        >
            {isFollowing ?  "FOLLOWING" : "FOLLOW"}
            
        </button>
    )
}

export default FollowButton ;