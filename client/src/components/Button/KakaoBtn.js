import React from 'react';
import KaKaoLogo from 'assets/img/logo/kakao.png';
import { BaseOauthBtn } from './index';
import styled from 'styled-components';

const {
  REACT_APP_KAKAO_HOST_URL,
  REACT_APP_KAKAO_REST_API_KEY,
  REACT_APP_KAKAO_REDIRECT_URI,
} = process.env;

function Index() {
  const onHandleClick = () => {
    //만약 팝업창 형태로 처리하고 싶다면, javascript oauth를 이용한다
    const kakaoCodeEndpoint = REACT_APP_KAKAO_HOST_URL + '/oauth/authorize';
    const client_id = REACT_APP_KAKAO_REST_API_KEY;
    const redirect_uri =
      REACT_APP_KAKAO_REDIRECT_URI || 'http://localhost:3000/oauth/kakao';

    window.location.href = `${kakaoCodeEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
  };

  return (
    <>
      <BaseOauthBtn onClick={onHandleClick}>
        <img src={KaKaoLogo} alt="kakao" />
        <div className="title">hello</div>
      </BaseOauthBtn>
    </>
  );
}

export default Index;
