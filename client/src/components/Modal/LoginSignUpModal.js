import React, { useState, createContext } from 'react';
import styled from 'styled-components/macro';
import KakaoBtn from 'components/Button/KakaoBtn';
import GoogleBtn from 'components/Button/GoogleBtn';
import LoginModal from '.';
import twoDog from 'assets/img/icons/twoDog.png';
import bigDog from 'assets/img/icons/bigDog.png';
import LoginInput from 'components/Input/loginInput';
import SignUpInput from 'components/Input/signUpInput';
import { BaseBtn } from 'components/Button';
import { LoginBtn } from 'components/Button/LoginBtn';
import { SignUpBtn } from 'components/Button/SignUpBtn';
import useForm from 'hooks/useForm';
import LoadingModal from './LoadingModal';
import ErrorModal from './ErrorModal';

import {
  validNickname,
  validEmail,
  validPassword,
  validConfirmPassword,
} from 'utils/formValidator';

export const loginCtx = createContext({});
export const signUpCtx = createContext({});

function Index({ onHandleLoginOpen }) {
  const [toSignUp, setToSignUp] = useState(false);
  const [kakaoBtnWrapperClicked, setKakaoBtnWrapperClicked] = useState(false);
  const [googleBtnWrapperClicked, setGoogleBtnWrapperClicked] = useState(false);
  const loginForm = useForm({ initialValues: { email: '', password: '' } });
  const signUpForm = useForm({
    initialValues: { nickname: '', email: '', password: '', confirm: '' },
  });

  const onHandleFormToggle = () => {
    setToSignUp((prev) => !prev);
    loginForm.onResetchanges();
    signUpForm.onResetchanges();
  };

  return (
    <ModalWrapper>
      <LoginModal className="loginModal" onHandleOpenState={onHandleLoginOpen}>
        {loginForm.submitState.status === 'loading' && <LoadingModal />}
        {loginForm.submitState.status === 'fail' && (
          <ErrorModal title="앗! 로그인에 실패했어요" />
        )}

        <LoginFormContainer
          className="flex-center-C"
          toSignUp={toSignUp}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <span className="formTitle">로그인</span>
          <loginCtx.Provider value={loginForm}>
            <LoginInput type="text" label="email" />
            <LoginInput type="password" label="password" />
          </loginCtx.Provider>
          <LoginBtn
            status={loginForm.submitState.status}
            className="loginBtn"
            onClick={(e) => {
              loginForm.onHandleLoginSubmit(onHandleLoginOpen);
            }}
          >
            로그인
          </LoginBtn>

          <OauthBtnContainer>
            <OauthBtnWrapper
              className="flex-center-C OauthBtnWrapper"
              onClick={() => {
                setKakaoBtnWrapperClicked(true);
              }}
            >
              <KakaoBtn kakaoBtnWrapperClicked={kakaoBtnWrapperClicked} />
              <span>카카오로 로그인</span>
            </OauthBtnWrapper>

            <OauthBtnWrapper
              className="flex-center-C OauthBtnWrapper"
              onClick={() => {
                setGoogleBtnWrapperClicked(true);
              }}
            >
              <GoogleBtn googleBtnWrapperClicked={googleBtnWrapperClicked} />
              <span>구글로 로그인</span>
            </OauthBtnWrapper>
          </OauthBtnContainer>

          <GoToSignUpBtn onClick={onHandleFormToggle}>
            혹시 아직 계정이 없으신가요??
          </GoToSignUpBtn>
        </LoginFormContainer>

        <SignUpFormContainer
          toSignUp={toSignUp}
          className="flex-center-C"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {signUpForm.submitState.status === 'loading' && <LoadingModal />}
          {signUpForm.submitState.status === 'fail' && (
            <ErrorModal title="앗! 가입에 실패했어요" />
          )}
          <>
            <span className="formTitle">회원가입</span>
            <signUpCtx.Provider value={signUpForm}>
              <SignUpInput
                type="text"
                label="nickname"
                validator={validNickname}
              />
              <SignUpInput type="text" label="email" validator={validEmail} />
              <SignUpInput
                type="password"
                label="password"
                validator={validPassword}
              />
              <SignUpInput
                type="password"
                label="confirm"
                validator={validConfirmPassword}
              />
            </signUpCtx.Provider>

            <SignUpBtn
              status={signUpForm.submitState.status}
              onClick={(e) =>
                signUpForm.onHandleSignupSubmit(e, onHandleFormToggle)
              }
            >
              {signUpForm.submitState.status === 'reject' ? '앗!' : '가입하기'}
            </SignUpBtn>

            <GoToSignInBtn onClick={onHandleFormToggle}>
              로그인으로 돌아가기
            </GoToSignInBtn>
          </>
        </SignUpFormContainer>

        <img className="dogImg twoDogImg" src={twoDog} alt="" />
        <img className="dogImg bigDogImg" src={bigDog} alt="" />
      </LoginModal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  & > .loginModal {
    width: 45%;
    height: 73%;
    min-height: 60rem;
    overflow: hidden;
  }

  & .dogImg {
    position: absolute;
    z-index: -1;
    bottom: 0.5rem;
    width: 30%;

    &.twoDogImg {
      width: 20%;
      margin-bottom: 0.5rem;
      left: 3rem;
    }

    &.bigDogImg {
      width: 15%;
      right: 2.5rem;
    }
  }
`;

//! Login
const LoginFormContainer = styled.form`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform: ${({ toSignUp }) => (toSignUp ? `translateX(-115%);` : `0`)};

  & .formTitle {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const GoToSignUpBtn = styled(BaseBtn)`
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
  cursor: pointer;

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
  transition: transform 0.5s;
  position: absolute;
  transform: ${({ toSignUp }) =>
    toSignUp ? 'translateX(0)' : 'translateX(110%)'};

  & .formTitle {
    padding-top: 4.5rem;
    margin: 2rem 0;
  }
`;

const GoToSignInBtn = styled(GoToSignUpBtn)`
  margin: 0 0 5rem 0;
`;

export default Index;
