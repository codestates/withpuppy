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
  Address,
  Icon,
  Info,
} from './WalkStyle';
import { genPinIconType } from 'utils/genPinIconType';
import DaumPostcode from 'react-daum-postcode';

function Walk({ setIsWalkOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    if (isOpen === false) {
      setIsWalkOpen(false);
    }
  };

  const [popup, setPopup] = useState(false);
  const openPopupHandler = () => {
    setPopup(!popup);
  };

  const [iconName, setIconName] = useState('');
  const iconNameHandler = (iconName) => {
    setIconName(iconName);
  };

  const closeHandler = () => {
    setPopup(false);
  };

  const [searchopen, setSearchopen] = useState(false);
  const searchopenHandler = () => {
    setSearchopen(!searchopen);
  };

  const [address, setAddress] = useState('');

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddress(fullAddress);
  };

  return (
    <>
      {isOpen === false ? (
        <ModalContainer>
          <CloseIcon onClick={openModalHandler}>X</CloseIcon>
          <InputContainer>
            <SelectBtn onClick={searchopenHandler}>
              위치를 검색해주세요.
            </SelectBtn>
            {searchopen === true ? (
              <DaumPostcode onComplete={handleComplete} />
            ) : null}
            <Address>{address}</Address>
            <Info>닉네임: nickname - 끌어 오는거</Info>
            <Info>강아지 이름: 멍멍이 - 끌어 오는거</Info>
            <SelectBtn onClick={openPopupHandler}>
              아이콘을 선택해주세요.
            </SelectBtn>
            <Icon>당신의 선택은 {iconName}!</Icon>
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
