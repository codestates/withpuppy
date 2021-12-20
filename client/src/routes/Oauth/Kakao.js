import React, { useEffect } from 'react';
import LienLogo from 'assets/img/logo/카카오라이언.png';
import { kakaoSignIn } from 'redux/Async/kakaoSignIn';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './PageLayout';

function Kakao() {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const kakaoSignUpAsync = async () => {
    try {
      await dispatch(kakaoSignIn({ code, social: 'kakao' })).unwrap();
      navigate('/');
    } catch (rejected) {
      if (
        rejected.status === 404 ||
        rejected.status === 409 ||
        rejected.status === 500
      ) {
        setTimeout(() => {
          navigate('/oauth/rejectPage', { state: { type: 'googleReject' } });
        }, 1000);
      }
    }
  };

  useEffect(() => {
    kakaoSignUpAsync();
  }, []);

  return <LoadingPage title="잠시만 기다려주세요~" img={LienLogo} />;
}

export default Kakao;
