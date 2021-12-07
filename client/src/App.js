import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Oauth from 'routes/Oauth';
import Map from 'routes/Map';
import Mypage from 'routes/Mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="oauth/*" element={<Oauth />} />
      </Routes>
    </Router>
  );
}

export default App;
