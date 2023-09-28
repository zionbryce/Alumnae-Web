import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import {LogIn} from './components/SuperAdmin/LogIn/LogIn';
import { Searchdash } from './components/SuperAdmin/Searchdash/Searchdash';

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>

      <Route path='/' element={<LogIn/>}/>
      <Route path='/search' element={<Searchdash/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App;