import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import petchingPuppyImg from "../assets/petchingPuppyImg.png";

export const DefaultImage = () => (
  <UserContainer>
    <Div className="titleContent">
      <Title>핀을 클릭해서 친구들을 만나보세요</Title>
      <MainImg src={petchingPuppyImg}></MainImg>
    </Div>
  </UserContainer>
);

export const UserContainer = styled.div`
  align-items: center;
  width: 600px;
  height: 1000px;
  background: #febeb0;
  position: absolute;
  top: 10;
  right: 0;
  z-index: 100;
`;

export const Div = styled.div`
  text-align: center;
  padding-top: 80%;
`;

const Title = styled.div`
  color: #f7f1ed;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: "Jua";
`;

const MainImg = styled.img`
  width: 230px;
  height: 280px;
`;
