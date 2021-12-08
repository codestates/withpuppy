import React from 'react';
import { BaseOauthBtn } from './index';
import GoogleLogo from 'assets/img/logo/google.png';
import styled from 'styled-components';

function GoogleBtn() {
  return (
    <GoogleBtnConatiner>
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
