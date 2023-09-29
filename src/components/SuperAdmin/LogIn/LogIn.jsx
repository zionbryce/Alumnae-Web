import React, {useState} from 'react'
import Logo from '../assets/logo2.png';
import hidepass from '../assets/hidepass.png';
import showpass from '../assets/showpass.png';
import './LogIn.css';
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleDashboardButtonClick = () => {
    navigate("/superdashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
        <div className="div">
          <div className="logo-container"></div>
          <img className="logo" src={Logo} alt="Logo"/>
          <div className="text-wrapper">Username</div>
          <div className="rectangle">
            <input type="text"/>
          </div>
          <div className="text-wrapper-2">Password</div>
          <div className="rectangle-2">
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? <img className="toggle-container" src={hidepass}/> : <img className="toggle-container" src={showpass}/>}
            </button>
          </div>
          <div className="text-wrapper-4">ALUMNAE</div>
          <button className="log-in-button" onClick={handleDashboardButtonClick}>
          Log In
        </button>
        </div>
      
  )
}

