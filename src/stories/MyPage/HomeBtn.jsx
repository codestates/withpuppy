import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import WhiteDog from "../assets/whiteDog.png";

export const HomeBtn = () => (
  <Div className="goToHomeContainer">
    <Title>홈으로 가기</Title>
    <img src={WhiteDog} alt="" />
  </Div>
);

export const Div = styled.div`
  cursor: pointer;
`;

export const Title = styled.span`
  color: #f7f1ed;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: "Jua";
`;
