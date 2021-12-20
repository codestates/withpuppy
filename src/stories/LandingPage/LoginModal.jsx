import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import KaKaoLogo from "../assets/카카오.png";
import GoogleLogo from "../assets/google.png";
import twoDog from "../assets/twoDog.png";
import bigDog from "../assets/bigDog.png";
import "./global.css";

export const LoginModal = () => (
  <>
    <ModalWrapper>
      <ModalContainer className="flex-center-C loginModal">
        <LoginFormContainer className="flex-center-C">
          <FormTitle>로그인</FormTitle>
          <BaseInputContainer>
            <span type="text" label="email">
              email
            </span>
            <input />
          </BaseInputContainer>
          <BaseInputContainer>
            <span type="password" label="password">
              password
            </span>
            <input />
          </BaseInputContainer>
          <LoginBtn className="loginBtn">로그인</LoginBtn>
          <OauthBtnContainer>
            <OauthBtnWrapper className="flex-center-C OauthBtnWrapper">
              <BaseOauthBtn>
                <img src={KaKaoLogo} alt="kakao" />
              </BaseOauthBtn>
              <span>카카오로 로그인</span>
            </OauthBtnWrapper>

            <OauthBtnWrapper className="flex-center-C OauthBtnWrapper">
              <GoogleBtnConatiner>
                <img src={GoogleLogo} alt="google" />
              </GoogleBtnConatiner>
              <span>구글로 로그인</span>
            </OauthBtnWrapper>
          </OauthBtnContainer>
          <GoToSignUpBtn>혹시 아직 계정이 없으신가요??</GoToSignUpBtn>
        </LoginFormContainer>
        <img className="dogImg twoDogImg" src={twoDog} alt="" />
        <img className="dogImg bigDogImg" src={bigDog} alt="" />
      </ModalContainer>
    </ModalWrapper>
  </>
);

export const ModalWrapper = styled.div`
  & > .loginModal {
    width: 675px;
    height: 1095px;
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

export const ModalContainer = styled.div`
  width: 675px;
  height: 1095px;
  min-height: 45rem;
  background-color: #febeb0;
  border-radius: 5rem;
  z-index: 10000;
  padding: 3rem;
  position: fixed;
`;

//! Login
export const LoginFormContainer = styled.form`
  width: 675px;
  height: 1095px;
  min-height: 60rem;
  overflow: hidden;
`;

export const FormTitle = styled.span`
  color: white;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: "Jua";
`;

export const BaseInputContainer = styled.div`
  border-radius: 12px;
  display: flex;
  width: 100%;
  height: 8%;
  min-height: 5rem;
  background-color: white;
  padding: 0.5rem 2rem;
  margin: 2.5rem 0;
  cursor: pointer;
  position: relative;

  & span {
    font-size: 1.3rem;
    margin-left: 2rem;
    color: #e97676;
    flex: 0.25;
    text-transform: uppercase;
    font-family: "Jua";
  }

  & input {
    /* border-radius: 12em; */
    border: none;
    width: 70%;
    height: 100%;
    background-color: transparent;
    font-size: 1.6rem;
    outline: none;
    flex: 0.75;
    cursor: pointer;
    color: #2f365f;
  }
`;

export const BaseBtn = styled.button`
  background-color: #3d5a5b;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  padding: 1.05rem;
  transition: background-color 0.5s;

  &:hover {
    background-color: #febeb0;
    color: #f7f1ed;
  }

  & > a {
    color: white;
    margin: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;
// className="flex-center-C"

export const LoginBtn = styled.button`
  background-color: #3d5a5b;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  padding: 1.05rem;
  transition: background-color 0.5s;
  font-family: "Jua";
  height: 8%;
  width: 50%;
  min-height: 5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  border-radius: 7px;

  &:hover {
    background-color: #f7f1ed;
    color: #2f365f;
  }

  &:active {
    transform: translateY(2px);
  }

  position: relative;
  transition: all 0.3s ease;

  &:before,
  &:after {
    position: absolute;
    transition: all 0.3s ease;
    z-index: 20000;
    top: -10rem;
    right: -10rem;
  }

  &:after {
    background-color: #e97676;
    width: 15rem;
    height: 8rem;
    font-size: 1.5rem;
    color: #f7f1ed;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    @media screen and (max-width: 950px) {
      width: 10.5rem;
      height: 5.5rem;
      top: -7rem;
      right: -7rem;
      font-size: 1.3rem;
      padding: 0.3rem;
    }
  }
`;

export const BaseOauthBtn = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 25%;
  overflow: hidden;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  /* color: #fff; */
  padding: 1.05rem;
  transition: background-color 0.5s;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const GoogleBtnConatiner = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 25%;
  overflow: hidden;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  /* color: #fff; */
  padding: 1.05rem;
  transition: background-color 0.5s;
  & img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: transparent;
  }
`;

export const GoToSignUpBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 3px;
  color: #e97676;
  font-size: 1.5rem;
  transition: color 0.5s ease-out;
  padding: 1.05rem;
  font-family: "Jua";

  & :hover {
    color: white;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

export const OauthBtnContainer = styled.div`
  display: flex;

  & > .OauthBtnWrapper:first-child {
    margin-right: 10%;
  }
`;

export const OauthBtnWrapper = styled.div`
  width: 15rem;
  border-radius: 7px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  & span {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #e97676;
    font-family: "Jua";
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
