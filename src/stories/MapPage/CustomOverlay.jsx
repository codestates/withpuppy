import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import profile from "../assets/profile.png";

export const CustomOverlay = () => (
  <>
    <ModalContainer>
      <ModalContent>
        <ImgSpan>
          <img src={profile} alt="puppy-profile" />
        </ImgSpan>
        <SectionSpan>
          <Info>주인 이름</Info>
          <Info>강아지 이름</Info>
          <Info>견종</Info>
          <Info>소개글</Info>
        </SectionSpan>
        <SectionSpan>
          <Info>나이</Info>
          <Info>성별</Info>
        </SectionSpan>
      </ModalContent>
      <ContactBtn className="flex-center-C">
        사용자 카카오톡/연락처로 연락하기
      </ContactBtn>
    </ModalContainer>
  </>
);

export const ModalContainer = styled.div`
  width: 252px;
  height: 160px;
  background-color: white;
  border-radius: 12px;
  z-index: 100;
  padding: 1rem;
  position: fixed;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: 0.05px solid #2f365f;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const ImgSpan = styled.span`
  margin-right: 5px;
`;

export const SectionSpan = styled.span`
  margin-right: 5px;
`;

export const Info = styled.div`
  font-family: "Jua";
  font-size: 14px;
  margin-bottom: 0.5em;
  margin-right: 2em;
`;

export const ReqBtn = styled.button`
  width: 250px;
  height: 44px;
  background-color: #3d5a5b;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Jua";
`;

export const ContactBtn = styled.button`
  width: 250px;
  height: 44px;
  background-color: #e97676;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Jua";
  margin-top: 5px;
`;
