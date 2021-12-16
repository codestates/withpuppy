import React, { useEffect } from 'react';
import RejectPage from 'routes/Oauth/PageLayout';
import Robot from 'assets/img/icons/robot.png';
import { logout } from 'redux/Slices/User';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Reject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
      dispatch(logout());
    }, 2000);
  }, []);

  return (
    <RejectPage
      title="앗! 로그인을 다시 해주세요!!!"
      img={Robot}
      styleOptions={{ rotate: false }}
    />
  );
}

export default Reject;
