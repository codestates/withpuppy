import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PatchingIcon from "../assets/patching.png";

export const PetchingBtn = () => (
  <Div className="pachingContainer">
    <img src={PatchingIcon} alt="" />
    <Title>패칭하러가기</Title>
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
