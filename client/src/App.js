import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Oauth from 'routes/Oauth';
import Map from 'routes/Map';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="oauth/*" element={<Oauth />} />
      </Routes>
    </Router>
  );
}

export default App;
