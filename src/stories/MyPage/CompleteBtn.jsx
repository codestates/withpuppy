import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const CompleteBtn = () => (
  <CardButtonContainer>
    <EditBtn className="cancel-btn">취소하기</EditBtn>
    <EditBtn>완료하기</EditBtn>
  </CardButtonContainer>
);

export const CardButtonContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  & > .cancel-btn {
    background-color: white;
    color: #3d5a5b;
    border: 1px solid #3d5a5b;

    &:hover {
    }
  }

  & > *:last-child {
    margin-left: 1rem;
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

export const EditBtn = styled.button`
  width: 15rem;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 12px;

  background-color: #3d5a5b;
  border: none;
  cursor: pointer;
  color: #fff;
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
`;
