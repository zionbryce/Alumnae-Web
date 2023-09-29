import React from 'react'
import './navigation.css';
import { Link } from 'react-router-dom';

export const navigation = () => {
  return (
   <nav>
    <Link to="/home">Alumnae</Link>
    <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/create-account">Create Account</Link>
      </li>
      <li>
        <Link to="/university-management">University Management</Link>
      </li>
      <li>
        <Link to="/college-management">College Management</Link>
      </li>
      <li>
        <Link to="/college-management">Management</Link>
      </li>
    </ul>
   </nav>
  )
}
