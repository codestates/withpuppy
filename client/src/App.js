import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Oauth from 'routes/Oauth';
import Map from 'routes/Map';
import Mypage from 'routes/Mypage';
import MypageReject from 'routes/Mypage/Reject';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/store';
import io from 'socket.io-client';
import { addUpdatedMessage } from 'redux/Slices/User';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  //! useEffect for socketIo
  const { loginState, userData, updatedMessages } = useSelector(selectUser);
  console.log(updatedMessages);

  useEffect(() => {
    if (loginState) {
      //! init
      const socket = io.connect(
        (process.env.REACT_APP_API_URL || 'http://localhost:80') +
          '/loggedUser',
        { transports: ['websocket'] },
      );

      socket.emit('addLoginUser', {
        id: userData.id,
      });

      //@ whenever received chat update
      socket.on('chatUpdated', (updatedPinInfo) => {
        const pinCheck = updatedMessages.findIndex(
          (pin) => pin.PinpointerId === updatedPinInfo.PinpointerId,
        );

        if (pinCheck === -1) {
          dispatch(addUpdatedMessage(updatedPinInfo));
        }
      });
    }
  });

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
