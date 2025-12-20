import React from "react";
import { useState } from "react";
import {FaBookmark , FaRegBookmark } from "react-icons/fa";
import "./SaveButton.css";


function SaveButton () {

     const [saved, setSaved] = useState(false);

    const toggleSave = (e) => {
    e.preventDefault(); // prevent link navigation
    setSaved(!saved); 
    }

    return (
        <div className="save-icon">      
            {saved ? (
                <FaBookmark className="save-icon" onClick={toggleSave} />
            ) : ( 
                <FaRegBookmark className="save-icon" onClick={toggleSave} />
            )}   
            </div>
    )
}

export default SaveButton ;