import React from 'react';
import { BaseOauthBtn } from './index';
import GoogleLogo from 'assets/img/logo/google.png';

function GoogleBtn() {
  return (
    <BaseOauthBtn>
      <img src={GoogleLogo} alt="google" />
    </BaseOauthBtn>
  );
}

export default GoogleBtn;
