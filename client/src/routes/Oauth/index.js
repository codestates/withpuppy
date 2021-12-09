import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Kakao from './Kakao';
import Google from './Google';
import RejectPage from './RejectPage';

function Index() {
  return (
    <div>
      <Routes>
        <Route path="kakao" element={<Kakao />} />
        <Route path="google" element={<Google />} />
        <Route path="rejectPage" element={<RejectPage />} />
      </Routes>
    </div>
  );
}

export default Index;
