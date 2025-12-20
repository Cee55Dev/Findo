import React from "react";
import { FiTool } from "react-icons/fi";
import { FiHeart, FiMessageCircle, FiBookmark } from "react-icons/fi";
import "./feed.css";

const Feed = () => {

    return(
        <div className="Feed-Page">
            <div className="feed-preview">
                    <div className="post">

                        <img src= "/assets/pictures/imgMakiSushi.jpg"  alt="Preview" className="post-image"/>
        
                    <div className="post-actions">
                        <div className="post-action">
                            <FiHeart size={30} />
                            <p className="nos">220</p>
                        </div>
                         <div className="post-action">
                            <FiMessageCircle size={30} />
                            <p className="nos">120</p>
                        </div>
                        
                        <FiBookmark size={30} />
                    </div>
                </div>
            </div>
            <div className="Pop-Up">
                <div className="set-icon"><FiTool  /></div>
                <h3>Page is still under development </h3>
                <p>Thank you for your continued patience and support</p>
            </div>
        </div>
    );
}

export default Feed;
