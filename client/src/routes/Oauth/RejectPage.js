import React, { useEffect } from 'react';
import RejectPage from './PageLayout';
import SadLienImg from 'assets/img/kakao/sadLien.jpeg';
import Robot from 'assets/img/icons/robot.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Reject() {
  const navigate = useNavigate();
  const {
    state: { type },
  } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <RejectPage
      title="앗! 로그인에 실패했어요!.. 잠시 뒤 홈으로 갑니다"
      img={type === 'googleReject' ? Robot : SadLienImg}
      styleOptions={{ rotate: false }}
    />
  );
}

export default Reject;
