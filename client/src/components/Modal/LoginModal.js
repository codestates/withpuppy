import React, { useState } from 'react';
import styled from 'styled-components/macro';
import KakaoBtn from 'components/Button/KakaoBtn';
import GoogleBtn from 'components/Button/GoogleBtn';
import LoginModal from '.';
import twoDog from 'assets/img/icons/twoDog.png';
import bigDog from 'assets/img/icons/bigDog.png';
import InputBar from 'components/Input';
import { BaseBtn } from 'components/Button';

function Index({ onHandleLoginOpen }) {
  const [toSignUp, setToSignUp] = useState(false);
  const onHandleFormToggle = () => {
    setToSignUp((prev) => !prev);
  };

  return (
    <LoginModalWrapper>
      <LoginModal className="loginModal" onHandleOpenState={onHandleLoginOpen}>
        <LoginFormContainer className="flex-center-C" toSignUp={toSignUp}>
          <span className="loginTitle">로그인</span>
          <InputBar type="text" label="ID" />
          <InputBar type="password" label="PASSWORD" />
          <LoginBtn>로그인</LoginBtn>

          <OauthBtnContainer>
            <OauthBtnWrapper className="flex-center-C OauthBtnWrapper">
              <KakaoBtn />
              <span>카카오로 로그인</span>
            </OauthBtnWrapper>

            <OauthBtnWrapper className="flex-center-C OauthBtnWrapper">
              <GoogleBtn />
              <span>구글로 로그인</span>
            </OauthBtnWrapper>
          </OauthBtnContainer>

          <SignInBtn onClick={onHandleFormToggle}>
            혹시 아직 계정이 없으신가요?
          </SignInBtn>
        </LoginFormContainer>

        <SignUpFormContainer toSignUp={toSignUp} className="flex-center-C">
          hi
        </SignUpFormContainer>

        <img className="dogImg twoDogImg" src={twoDog} alt="" />
        <img className="dogImg bigDogImg" src={bigDog} alt="" />
      </LoginModal>
    </LoginModalWrapper>
  );
}

const LoginModalWrapper = styled.div`
  & > .loginModal {
    width: 45%;
    height: 77%;
    min-height: 50rem;
    overflow-x: hidden;
  }

  & .dogImg {
    position: absolute;
    z-index: -1;
    bottom: 2rem;
    width: 30%;

    &.twoDogImg {
      width: 25%;
      left: 3rem;
    }

    &.bigDogImg {
      width: 15%;
      right: 2.5rem;
    }
  }
`;

//! Login
const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in;
  transform: ${({ toSignUp }) => (toSignUp ? `translateX(-110%);` : `0`)};

  & .loginTitle {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const LoginBtn = styled(BaseBtn)`
  width: 50%;
  height: 5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  border-radius: 7px;
`;

const SignInBtn = styled(BaseBtn)`
  /* background-color: rgba(255, 255, 255, 0.9); */
  background-color: transparent;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.thirdColor};
  font-size: 1.5rem;
  transition: color 0.5s ease-out;
  & :hover {
    color: white;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

const OauthBtnContainer = styled.div`
  display: flex;

  & > .OauthBtnWrapper:first-child {
    margin-right: 10%;
  }
`;

const OauthBtnWrapper = styled.div`
  width: 15rem;
  border-radius: 7px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  & span {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.thirdColor};
  }

  @media screen and (max-width: 850px) {
    padding: 1.5rem;
    width: 13rem;

    & button {
      width: 2.5rem;
      height: 2.5rem;
    }

    & span {
      font-size: 1.3rem;
    }
  }
`;

//@ signUp
const SignUpFormContainer = styled(LoginFormContainer)`
  transition: transform 1s ease-in-out;
  position: absolute;
  transform: ${({ toSignUp }) => toSignUp} translateX(100%);
`;

export default Index;
