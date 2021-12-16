import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Oauth from 'routes/Oauth';
import Map from 'routes/Map';
import Mypage from 'routes/Mypage';
import MypageReject from 'routes/Mypage/Reject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/reject" element={<MypageReject />} />
        <Route path="oauth/*" element={<Oauth />} />
      </Routes>
    </Router>
  );
}

export default App;
