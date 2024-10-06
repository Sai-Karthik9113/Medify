import React from 'react';
import Home from './Pages/Home/Home';
import MedicalCenters from './Pages/MedicalCenters/MedicalCenters';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export const config = {
  endpoint: 'https://meddata-backend.onrender.com'
};

export function uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
}

function App() {
  
  return (
    <div className="App">
      <div className='Banner'>
        <div className='BannerText'>
          The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/medical-centers' element={<MedicalCenters />} />
      </Routes>
    </div>
  );
}

export default App;
