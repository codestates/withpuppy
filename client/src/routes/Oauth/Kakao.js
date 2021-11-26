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
      // const fullfilled = await dispatch(kakaoSignIn(code)).unwrap();
      // console.log('It is fullfilled', fullfilled);
      await dispatch(kakaoSignIn(code)).unwrap();
      navigate('/');
    } catch (rejected) {
      console.log('it is rejected', rejected);
      if (rejected.status === 409) {
        setTimeout(() => {
          navigate('/oauth/rejectPage');
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
