import React, { useEffect } from 'react';
import { googleSignIn } from 'redux/Async/googleSignIn';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './PageLayout';
import GoogleTitle from 'assets/img/logo/googleTitle.png';

function Google() {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const googleSignUpAsync = async () => {
    try {
      await dispatch(googleSignIn({ code, social: 'google' })).unwrap();
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
    googleSignUpAsync();
  }, []);

  return <LoadingPage title="잠시만 기다려주세요~" img={GoogleTitle} />;
}

export default Google;
