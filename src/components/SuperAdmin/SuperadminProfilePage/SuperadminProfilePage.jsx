import React from "react";
import { useNavigate } from "react-router-dom";
import "./SAProfilestyle.css";

export const SuperadminProfilePage = () => {
  const navigate = useNavigate();
  const handleLogoutButtonClick = () => {
    navigate("/logout");
  };
  const handleEditProfButtonClick = () => {
    navigate("/superEditprofile");
  };
  

  return (
    <div className="superadmin-profile-page">
        <div className="overlap">
          <div className="text-wrapper">ALUMNAE</div>
          <button className="text-wrapper-2">Profile</button>
          <button className="text-wrapper-3" onClick={handleLogoutButtonClick}>
            Logout
        </button>
          <button className="text-wrapper-4">Search</button>
          <button className="text-wrapper-5">University Management</button>
          <button className="text-wrapper-6">Department Management</button>
          <button className="text-wrapper-7">Create Account</button>
        </div>
        <div className="overlap-group">
          <img className="logo" alt="Logo" src="https://c.animaapp.com/OlqN6ceQ/img/logo2-1.png" />
          <div className="group-3">
            <div className="profile-picture">
              <img className="vector" alt="Vector" src="https://c.animaapp.com/OlqN6ceQ/img/vector@2x.png" />
              <img className="img" alt="Vector" src="https://c.animaapp.com/OlqN6ceQ/img/vector-1.svg" />
            </div>
            <div className="overlap-group-2">
              <button className="text-wrapper-8" onClick={handleEditProfButtonClick}>Edit Profile</button>
            </div>
          </div>
          <div className="group-4">
            <div className="text-wrapper-9">PROFILE</div>
            <div className="text-wrapper-10">ID:</div>
            <div className="text-wrapper-11">Personal Email:</div>
            <div className="text-wrapper-12">Institutional Email:</div>
            <div className="text-wrapper-13">Mobile Number:</div>
            <div className="overlap-2">
              <div className="text-wrapper-14">Marital Status:</div>
              <div className="text-wrapper-15">Address:</div>
              <div className="text-wrapper-16">Date of Birth:</div>
            </div>
            <div className="text-wrapper-17">Job Title:</div>
            <div className="text-wrapper-18">Gender:</div>
            <div className="text-wrapper-19">Company:</div>
          </div>
        </div>
    </div>

  );
};

/*
/////package.json scripts
////    "start": "react-scripts start",
 ////   "build": "react-scripts build",
 ///   "test": "react-scripts test",
///    "eject": "react-scripts eject"
*/