import React from "react";
import { useNavigate } from "react-router-dom";
import "./SADashstyle.css";

export const SuperadminDashboard = () => {
  const navigate = useNavigate();

  const handleProfileButtonClick = () => {
    navigate("/superprofile");
  };
  const handleLogoutButtonClick = () => {
    navigate("/logout");
  };

  return (
    <div className="superadmin-dashboard">
      <div className="overlap-group">
        <div className="text-wrapper">ALUMNAE</div>
        <button className="text-wrapper-2" onClick={handleProfileButtonClick}>
          Profile
        </button>
        <button className="text-wrapper-3" onClick={handleLogoutButtonClick}>
          Logout
        </button>
        <button className="text-wrapper-4">Search</button>
        <button className="text-wrapper-5">University Management</button>
        <button className="text-wrapper-6">Department Management</button>
        <button className="text-wrapper-7">Create Account</button>
      </div>
      <div className="overlap">
        <img
          className="logo"
          alt="Logo"
          src="https://c.animaapp.com/IwlHDYdb/img/logo2-1.png"
        />
        <div className="text-wrapper-8">WELCOME USER!</div>
      </div>
    </div>
  );
};
