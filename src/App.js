import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import {LogIn} from './components/SuperAdmin/LogIn/LogIn';
import { Searchdash } from './components/SuperAdmin/Searchdash/Searchdash';
<<<<<<< HEAD
import { SuperadminDashboard } from './components/SuperAdmin/SuperadminDashboard/SuperadminDashboard';
import { SuperadminProfilePage } from './components/SuperAdmin/SuperadminProfilePage/SuperadminProfilePage';
import { SuperadminEditProfile } from './components/SuperAdmin/SuperadminProfilePage/SuperadminEditProfile/SuperadminEditProfile';
=======
import { Navigation } from './components/SuperAdmin/navigation/navigation';
import { Home } from './components/SuperAdmin/home/home';
>>>>>>> 603086e7f2e7eb93496fb4ebc1d58e0f7f114bb4

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navigation>
      <Routes>
      <Route path="/" element={<Navigate to="/logout" />} /> {/* Default route */}
      <Route path='/logout' element={<LogIn/>}/>
      <Route path='/search' element={<Searchdash/>}/>
<<<<<<< HEAD
      <Route path="/superdashboard" element={<SuperadminDashboard />} />
      <Route path="/superprofile" element={<SuperadminProfilePage />} />
      <Route path="/superEditprofile" element={<SuperadminEditProfile />} />
=======
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/home' element={<Home/>}/>
>>>>>>> 603086e7f2e7eb93496fb4ebc1d58e0f7f114bb4
      </Routes>
      </Navigation>
    </div>
    </BrowserRouter>
  )
}

export default App;