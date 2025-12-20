import React, { useState, useMemo } from "react";
import BottomNav from "../components/BottomNav";
import LoginSignUp from "./LoginSignUpUser";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./Profile.css"


const Profile = () => {

    const navigate = useNavigate();
    
    function LogIn(){
        navigate("/LoginSignUpUser");
    } 

     return(
        <div className="Page">
            <Header showSearch={false} />

            <div className="content">

                <div className="panel">
                    <h3>Account</h3>
                </div>
                <div className="panel">
                    <h3>Saved</h3>
                </div>
                <div className="panel">
                    <h3>Preferences</h3>
                </div>
            </div>

            <div className="Profile-Actions">
                <div className="Log-In" onClick={LogIn}>LOG IN</div>
            </div>
        </div>
     )
}

export default Profile;