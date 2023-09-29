import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import {LogIn} from './components/SuperAdmin/LogIn/LogIn';
import { Searchdash } from './components/SuperAdmin/Searchdash/Searchdash';
import { SuperadminDashboard } from './components/SuperAdmin/SuperadminDashboard/SuperadminDashboard';
import { SuperadminProfilePage } from './components/SuperAdmin/SuperadminProfilePage/SuperadminProfilePage';
import { SuperadminEditProfile } from './components/SuperAdmin/SuperadminProfilePage/SuperadminEditProfile/SuperadminEditProfile';

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/logout" />} /> {/* Default route */}
      <Route path='/logout' element={<LogIn/>}/>
      <Route path='/search' element={<Searchdash/>}/>
      <Route path="/superdashboard" element={<SuperadminDashboard />} />
      <Route path="/superprofile" element={<SuperadminProfilePage />} />
      <Route path="/superEditprofile" element={<SuperadminEditProfile />} />
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App;