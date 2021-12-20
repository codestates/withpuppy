/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import {
  ModalContainer,
  CloseIcon,
  InputContainer,
  EnrollBtn,
  MiniModalContainer,
  SaveBtn,
  ImgContainer,
  MiniBtn,
  SelectBtn,
  Address,
  Icon,
  Info,
  ExtendOptions,
  ModalBackground,
} from './WalkStyle';
import { genPinIconType } from 'utils/genPinIconType';
import DaumPostcode from 'react-daum-postcode';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/store';
import axios from 'redux/Async/axios';

function Walk({ setIsWalkOpen, latlng, pinpointers, allPins, setAllPins }) {
  // console.log(latlng);
  const { userData } = useSelector(selectUser);

  console.debug('UserData on Walk', userData);

  const [popup, setPopup] = useState(false);
  const openPopupHandler = () => {
    setPopup(!popup);
  };

  const [iconName, setIconName] = useState('');
  const iconNameHandler = (iconName) => {
    setIconName(iconName);
    setUserInfo({
      location: address,
      nickname: userData.nickname,
      puppyName: userData.puppy.puppyName,
      icon: iconName,
      extend: extend,
      PuppyId: userData.puppy.id,
      UserId: userData.id,
      lat: latlng[0],
      lng: latlng[1],
    });
  };

  const closeHandler = () => {
    setPopup(false);
  };

  const [searchopen, setSearchopen] = useState(false);
  const searchopenHandler = () => {
    setSearchopen(!searchopen);
  };

  const [address, setAddress] = useState('');

  const [extend, setExtend] = useState(0);
  const extendHandler = (e) => {
    setExtend(e.target.value);
    setUserInfo({
      location: address,
      nickname: userData.nickname,
      puppyName: userData.puppy.puppyName,
      icon: iconName,
      extend: Number(e.target.value),
      PuppyId: userData.puppy.id,
      UserId: userData.id,
      lat: latlng[0],
      lng: latlng[1],
    });
  };

  const [userInfo, setUserInfo] = useState({
    location: address,
    nickname: userData.nickname,
    puppyName: userData.puppy.puppyName,
    icon: iconName,
    extend: extend,
    PuppyId: userData.puppy.id,
    UserId: userData.id,
    lat: latlng[0],
    lng: latlng[1],
  });

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
    setUserInfo({
      location: fullAddress,
      nickname: userData.nickname,
      puppyName: userData.puppy.puppyName,
      icon: iconName,
      extend: extend,
      PuppyId: userData.puppy.id,
      UserId: userData.id,
      lat: latlng[0],
      lng: latlng[1],
    });
  };

  //로케이션(식별용 위치), 온클릭시에 받아온 x좌표랑 y좌표, 아이콘타입, 익스파이어(뉴메릭으로 전환)
  //date.now() + extend => neumeric
  //유저아이디나 퍼피 아이디 => 헬퍼
  //아예 보낼때 같이 보내버려서 저장 시키기. (깃북 수정은 덤);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    if (isOpen === false) {
      setIsWalkOpen(false);
    }
  };

  useEffect(() => {
    console.log('new pin!');
  }, [pinpointers]);

  const reqHandler = async () => {
    try {
      setIsOpen(!isOpen);
      if (isOpen === false) {
        setIsWalkOpen(false);
      }
      // pinpointers.push(userInfo)
      const response = await axios.post('/map/enroll', userInfo);
      console.log(response.data.data, 'from walk!!!!!!!!!!!!!!!!!!!!!!!!!');
      // setAllPins([...allPins, response.data.data]);
      pinpointers.push(response.data.data);
      console.log(userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isOpen === false ? (
        <>
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
              <Info>{userData.nickname} 님</Info>
              <Info>귀여운 {userData.puppy.puppyName}</Info>
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
              <Info>
                연장 기간을
                <ExtendOptions onChange={extendHandler} value={extend}>
                  <option value="choose" disabled>
                    --기간을 선택해주세요!--
                  </option>
                  <option value="0">연장 없음</option>
                  <option value="1">하루 연장</option>
                  <option value="3">3일 연장</option>
                  <option value="7">일주일 연장</option>
                </ExtendOptions>
                <span>{extend}일 연장 합니다!</span>
              </Info>
            </InputContainer>
            <div className="flex-center-C">
              <EnrollBtn onClick={reqHandler}>등록하기</EnrollBtn>
            </div>
          </ModalContainer>

          <ModalBackground />
        </>
      ) : null}
    </>
  );
}

export default Walk;
