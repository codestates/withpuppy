import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./global.css";
import MypageLogo from "../assets/puppyLogo.png";
import { UserCard } from "./UserCard";
import { PuppyCard } from "./PuppyCard";
import { PetchingBtn } from "./PetchingBtn";
import { HomeBtn } from "./HomeBtn";

export const Mypage = () => (
  <>
    <MypageMain className="mypageMain">
      <MypageHeader>
        <img src={MypageLogo} alt="" />
      </MypageHeader>
      <CardContainer className="flex-center-R">
        <UserCard />
        <PuppyCard />
      </CardContainer>
      <MypageBottom>
        <PetchingBtn />
        <HomeBtn />
      </MypageBottom>
    </MypageMain>
  </>
);

export const MypageMain = styled.main`
  width: 2000px;
  height: 1300px;
  transform: translateY(6rem);
  background-color: #febeb0;
  &.mypageMain {
    padding: 2rem;
    transform: translateY(0);
  }
`;

export const MypageHeader = styled.header`
  text-align: center;
  margin-bottom: 5.5rem;

  & img {
    width: 30rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
`;

export const MypageBottom = styled.section`
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
