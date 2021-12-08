/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import {
  ModalContainer,
  CloseIcon,
  InputContainer,
  Input,
  EnrollBtn,
  MiniModalContainer,
  SaveBtn,
  ImgContainer,
  MiniBtn,
  SelectBtn,
} from './WalkStyle';
import { genPinIconType } from 'utils/genPinIconType';

function Walk() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const [popup, setPopup] = useState(false);
  const openPopupHandler = () => {
    setPopup(!popup);
  };

  const [iconName, setIconName] = useState('');
  const iconNameHandler = (iconName) => {
    setIconName(iconName);
    console.log(iconName);
  };

  const closeHandler = () => {
    setPopup(false);
  };

  return (
    <>
      {isOpen === false ? (
        <ModalContainer>
          <CloseIcon onClick={openModalHandler}>X</CloseIcon>
          <InputContainer>
            <div className="input-location">
              위치:
              <Input placeholder="위치를 입력해주세요." />
            </div>
            <div className="kakao-nickname">닉네임: nickname - 끌어 오는거</div>
            <div className="puppyName">강아지 이름: 멍멍이 - 끌어 오는거</div>
            <SelectBtn onClick={openPopupHandler}>
              사용할 아이콘을 선택해주세요.
            </SelectBtn>
            {popup === true ? (
              <MiniModalContainer>
                <ImgContainer>
                  <MiniBtn onClick={() => iconNameHandler('보브')}>
                    <img src={genPinIconType('보브')} />
                  </MiniBtn>
                  <MiniBtn onClick={() => iconNameHandler('유나')}>
                    <img src={genPinIconType('유나')} />
                  </MiniBtn>
                  <MiniBtn onClick={() => iconNameHandler('이코')}>
                    <img src={genPinIconType('이코')} />
                  </MiniBtn>
                  <MiniBtn onClick={() => iconNameHandler('카덴')}>
                    <img src={genPinIconType('카덴')} />
                  </MiniBtn>
                  <MiniBtn onClick={() => iconNameHandler('펠릭스')}>
                    <img src={genPinIconType('펠릭스')} />
                  </MiniBtn>
                  <MiniBtn onClick={() => iconNameHandler('히로')}>
                    <img src={genPinIconType('히로')} />
                  </MiniBtn>
                </ImgContainer>
                <div className="flex-center-C">당신의 선택은 {iconName}!</div>
                <SaveBtn onClick={closeHandler}>저장</SaveBtn>
              </MiniModalContainer>
            ) : null}
          </InputContainer>
          <div className="flex-center-C">
            <EnrollBtn onClick={openModalHandler}>등록하기</EnrollBtn>
          </div>
        </ModalContainer>
      ) : null}
    </>
  );
}

export default Walk;
