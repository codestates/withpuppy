import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import sadPuppyIcon from "../assets/sadPuppy.png";
import "./global.css";

export const LogoutModal = () => (
  <>
    <Modal className="flex-center-C">
      <LogoutContainer className="flex-center-C">
        <img src={sadPuppyIcon} alt="" />
        <Title>정말 갈거냐멍?</Title>
        <LogoutBtnContainer>
          <LogoutBtn>예</LogoutBtn>
          <LogoutBtn>아니오</LogoutBtn>
        </LogoutBtnContainer>
      </LogoutContainer>
    </Modal>
  </>
);

export const Modal = styled.div`
  height: 450px;
  width: 800px;
  background-color: #febeb0;
  border-radius: 5rem;
  z-index: 10000;
  padding: 3rem;
  position: fixed;
`;

export const LogoutContainer = styled.div`
  height: 50%;

  & img {
    height: 100%;
    margin-bottom: 2rem;
  }

  & span {
    color: white;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.span`
  color: white;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: "Jua";
`;

export const LogoutBtnContainer = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-evenly;
`;

export const LogoutBtn = styled.button`
  background-color: #3d5a5b;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  padding: 1.05rem;
  transition: background-color 0.5s;
  font-family: "Jua";

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

  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 1.5rem;
  width: 10rem;
  background-color: white;
  color: #febeb0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
