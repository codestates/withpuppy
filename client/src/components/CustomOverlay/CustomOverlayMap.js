import React from 'react';
import {
  ModalContainer,
  ReqBtn,
  ContactBtn,
  Info,
  ImgSpan,
  ModalContent,
  SectionSpan,
} from './CustomStyle';
import profile from './profile.png';

function CustomOverlayMap() {
  return (
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
        <a href="http://localhost:3000">
          <ReqBtn className="flex-center-C">
            로그인해서 상대의 연락처를 보세요!
          </ReqBtn>
        </a>
        {/* <ContactBtn className="flex-center-C">
          사용자 카카오톡/연락처로 연락하기
        </ContactBtn> */}
      </ModalContainer>
    </>
  );
}

export default CustomOverlayMap;
