import React, { useState } from 'react';
import {
  ModalContainer,
  CloseIcon,
  InputContainer,
  Input,
  EnrollBtn,
} from './WalkStyle';
import Iko from './iko.png';

function Walk() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <CloseIcon onClick={openModalHandler}>X</CloseIcon>
        <InputContainer>
          <div className="input-location">
            위치:
            <Input placeholder="위치를 입력해주세요." />
          </div>
          <div className="kakao-nickname">닉네임: nickname - 끌어 오는거</div>
          <div className="puppyName">강아지 이름: 멍멍이 - 끌어 오는거</div>
          <div className="icon-option">
            사용할 아이콘:{' '}
            <img src={Iko} style={{ height: '50px', width: '50px' }} />
          </div>
        </InputContainer>
        <div className="flex-center-C">
          <EnrollBtn>등록하기</EnrollBtn>
        </div>
      </ModalContainer>
    </>
  );
}

export default Walk;
