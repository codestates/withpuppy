import React from 'react';
import { BaseOauthBtn } from './index';
import GoogleLogo from 'assets/img/logo/google.png';
import styled from 'styled-components';

const {
  REACT_APP_GOOGLE_HOST_URL,
  REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_GOOGLE_REDIRECT_URI,
} = process.env;

function GoogleBtn({ googleBtnWrapperClicked }) {
  const onHandleClick = () => {
    const redirect_uri = REACT_APP_GOOGLE_REDIRECT_URI
      ? REACT_APP_GOOGLE_REDIRECT_URI
      : 'http://localhost:3000/oauth/google';

    window.location.href = `${REACT_APP_GOOGLE_HOST_URL}?client_id=${REACT_APP_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&scope=https://www.googleapis.com/auth/userinfo.email`;
  };

  if (googleBtnWrapperClicked) {
    onHandleClick();
  }

  return (
    <GoogleBtnConatiner onClick={onHandleClick}>
      <img src={GoogleLogo} alt="google" />
    </GoogleBtnConatiner>
  );
}

const GoogleBtnConatiner = styled(BaseOauthBtn)`
  &:hover {
    background-color: transparent;
  }
`;

export default GoogleBtn;
