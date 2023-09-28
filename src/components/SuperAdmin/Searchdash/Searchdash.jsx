import React from "react";
import "./Searchdash.css";

export const Searchdash = () => {
  return (
    <div className="Search">
      <div className="div">
        <div className="overlap-group">
          <div className ="text-wrapper">ALUMNAE</div>
          <a href="/profile" className="text-wrapper-2">Profile</a>
          <a href="/logout" className="text-wrapper-3">Logout</a>
          <a href="/Search" className="text-wrapper-4">Search</a>
          <a href="/university" className="text-wrapper-5">University Management</a>
          <a href="/department" className="text-wrapper-6">Department Management</a>
          <a href="/create-account" className="text-wrapper-7">Create Account</a>
        </div>
        <div className ="text-wrapper-8">University</div>
        <div className="overlap">
        <div className ="text-wrapper-9">College</div>
        <div className ="text-wrapper-10">Department</div>
        <div className ="text-wrapper-11">Faculty</div>
        <div className ="text-wrapper-12">Gender</div>
        <div className ="text-wrapper-13">Status</div>
        <input type="text" className="rectangle" placeholder='Search University' />
        <input type="text" className="rectangle-2" placeholder='Search College' />
        <input type="text" className="rectangle-3" placeholder='Search Department' />
        <input type="text" className="rectangle-4" placeholder='Search Faculty' />
        <input type="text" className="rectangle-5" placeholder='Search Gender' />
        <input type="text" className="rectangle-6" placeholder='Search Status' />
          <img className="logo" alt="Logo" src="https://c.animaapp.com/W1jxh1MV/img/logo2-1.png" />
        </div>
        <div className ="text-wrapper-14">Year Level</div>
        <input type="text" className="rectangle-7" placeholder='Year Level' />
        <div className="overlap-2">
          <div className="rectangle-8" />
          <button className ="text-wrapper-15">Search</button>
        </div>
      </div>
    </div>
  );
};
