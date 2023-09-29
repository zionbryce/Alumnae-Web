import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import {LogIn} from './components/SuperAdmin/LogIn/LogIn';
import { Searchdash } from './components/SuperAdmin/Searchdash/Searchdash';
import { Navigation } from './components/SuperAdmin/navigation/navigation';
import { Home } from './components/SuperAdmin/home/home';

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navigation>
      <Routes>

      <Route path='/' element={<LogIn/>}/>
      <Route path='/search' element={<Searchdash/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
      </Navigation>
    </div>
    </BrowserRouter>
  )
}

export default App;