import React from "react";
import { useNavigate } from "react-router-dom";
import "./SAEditProfstyle.css";

export const SuperadminEditProfile = () => {
  const navigate = useNavigate();
  const handleLogoutButtonClick = () => {
    navigate("/logout");
  };
  const handleSaveProfileButtonClick = () => {
    navigate("/superprofile");
  };
  

  return (
    <div className="superadmin-edit-profile">
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
            <div className="overlap-group-2">
              <button className="text-wrapper-8" onClick={handleSaveProfileButtonClick}>Save</button>
            </div>
          </div>
          <div className="group-4">
            <div className="text-wrapper-9">EDIT PROFILE</div>
          </div>
        </div>
    </div>

  );
};