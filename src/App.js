
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import ivideo from './videos/inviteinfo.mp4'
import { useState, useEffect } from 'react';


function App() {


  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SigninPage />} exact/>
    </Routes>
     
    </Router>
  );
}

export default App;
