import React, { useEffect, useState } from 'react';
import MypageMain from './';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import MypageLogo from 'assets/img/logo/puppyLogo.png';
import PatchingIcon from 'assets/img/icons/patching.png';
import WhiteDog from 'assets/img/icons/whiteDog.png';

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // const userInfo = localStorage.getItem('userData');
    const userInfo = localStorage.getItem('persist:persistData');
    if (!userInfo) {
      navigate('/');
    }
  });

  const {
    userData: { email, nickname, phone, profileImg, puppy },
  } = useSelector(selectUser);

  return (
    <MypageMain>
      <MypageHeader>
        <img src={MypageLogo} alt="" />
      </MypageHeader>

      <CardContainer className="flex-center-R">
        <ProfileCard>
          <span>내 정보</span>
        </ProfileCard>
        <ProfileCard className="puppyCard">
          <span className="puppyCardTitle">내 강아지 정보</span>
        </ProfileCard>
      </CardContainer>

      <MypageBottom>
        <div
          className="pachingContainer"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/map';
          }}
        >
          <img src={PatchingIcon} alt="" />
          <span>패칭하러가기</span>
        </div>

        <img src={WhiteDog} alt="" />
      </MypageBottom>
    </MypageMain>
  );
}

const MypageHeader = styled.header`
  text-align: center;
  margin-bottom: 5.5rem;

  & img {
    width: 30rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProfileCard = styled.div`
  width: 45%;
  min-width: 40rem;
  min-height: 55rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 4px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 0 2rem 2rem 2rem;
  position: relative;

  & > span {
    position: absolute;
    top: -8%;
    color: white;
    font-size: 2.5rem;
    &.puppyCardTitle {
      right: 0;
    }
  }

  @media screen and (max-width: 919px) {
    min-width: 60rem;

    &.puppyCard {
      margin-top: 5rem;

      & > span {
        left: 0;
      }
    }
  }

  @media screen and (max-width: 700px) {
    min-width: 45rem;
  }
`;

const MypageBottom = styled.section`
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  & .pachingContainer {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    user-select: none;

    & > span {
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 700px) {
    & img {
      width: 7rem;
    }

    & .pachingContainer {
      & span {
        margin-left: 1.5rem;
        font-size: 2rem;
      }
    }
  }
`;

export default Index;
