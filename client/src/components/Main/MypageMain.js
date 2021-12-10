import React, { useEffect, useState } from 'react';
import MypageMain from './';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MypageLogo from 'assets/img/logo/puppyLogo.png';
import PatchingIcon from 'assets/img/icons/patching.png';
import WhiteDog from 'assets/img/icons/whiteDog.png';
import UserCard from 'components/Section/Card/UserCard';
import PuppyCard from 'components/Section/Card/PuppyCard';

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('persist:persistData');
    if (!userInfo) {
      navigate('/');
    }
  });

  return (
    <MypageMain className="mypageMain">
      <MypageHeader>
        <img src={MypageLogo} alt="" />
      </MypageHeader>

      <CardContainer className="flex-center-R">
        <UserCard />
        <PuppyCard />
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

        <div
          className="goToHomeContainer"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
        >
          <span>홈으로 가기</span>
          <img src={WhiteDog} alt="" />
        </div>
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

  & .goToHomeContainer {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    user-select: none;

    & > span {
      margin-right: 2rem;
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

    & .goToHomeContainer {
      & span {
        margin-right: 1.5rem;
        font-size: 2rem;
      }
    }
  }
`;

export default Index;
