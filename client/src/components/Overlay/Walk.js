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

function Walk({
  setIsWalkOpen,
  latlng,
  pinpointers,
  setAllPins,
  searchResult,
}) {
  // console.log(latlng);
  const { userData } = useSelector(selectUser);

  // console.debug('UserData on Walk', userData);

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

    // e.g. '?????? ????????? ????????????2??? 20 (?????????1???)'
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

  //????????????(????????? ??????), ??????????????? ????????? x????????? y??????, ???????????????, ???????????????(??????????????? ??????)
  //date.now() + extend => neumeric
  //?????????????????? ?????? ????????? => ??????
  //?????? ????????? ?????? ??????????????? ?????? ?????????. (?????? ????????? ???);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    if (isOpen === false) {
      setIsWalkOpen(false);
    }
  };

  useEffect(() => {}, [pinpointers]);

  const reqHandler = async () => {
    try {
      setIsOpen(!isOpen);
      if (isOpen === false) {
        setIsWalkOpen(false);
      }

      await axios.post('/map/enroll', userInfo);

      const response = await axios.post('/map/allpins', searchResult);

      setAllPins({
        data: response.data.data,
        pinpointers: response.data.pinpointers,
      });
      pinpointers.push(response.data.data);
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
                ????????? ??????????????????.
              </SelectBtn>
              {searchopen === true ? (
                <DaumPostcode onComplete={handleComplete} />
              ) : null}
              <Address>{address}</Address>
              <Info>{userData.nickname} ???</Info>
              <Info>????????? {userData.puppy.puppyName}</Info>
              <SelectBtn onClick={openPopupHandler}>
                ???????????? ??????????????????.
              </SelectBtn>
              <Icon>????????? ????????? {iconName}!</Icon>
              {popup === true ? (
                <MiniModalContainer>
                  <ImgContainer>
                    <MiniBtn onClick={() => iconNameHandler('??????')}>
                      <img src={genPinIconType('??????')} />
                    </MiniBtn>
                    <MiniBtn onClick={() => iconNameHandler('??????')}>
                      <img src={genPinIconType('??????')} />
                    </MiniBtn>
                    <MiniBtn onClick={() => iconNameHandler('??????')}>
                      <img src={genPinIconType('??????')} />
                    </MiniBtn>
                    <MiniBtn onClick={() => iconNameHandler('??????')}>
                      <img src={genPinIconType('??????')} />
                    </MiniBtn>
                    <MiniBtn onClick={() => iconNameHandler('?????????')}>
                      <img src={genPinIconType('?????????')} />
                    </MiniBtn>
                    <MiniBtn onClick={() => iconNameHandler('??????')}>
                      <img src={genPinIconType('??????')} />
                    </MiniBtn>
                  </ImgContainer>
                  <div className="flex-center-C">????????? ????????? {iconName}!</div>
                  <SaveBtn onClick={closeHandler}>??????</SaveBtn>
                </MiniModalContainer>
              ) : null}
              <Info>
                ?????? ?????????
                <ExtendOptions onChange={extendHandler} value={extend}>
                  <option value="choose" disabled>
                    --????????? ??????????????????!--
                  </option>
                  <option value="0">?????? ??????</option>
                  <option value="1">?????? ??????</option>
                  <option value="3">3??? ??????</option>
                  <option value="7">????????? ??????</option>
                </ExtendOptions>
                <span>{extend}??? ?????? ?????????!</span>
              </Info>
            </InputContainer>
            <div className="flex-center-C">
              <EnrollBtn onClick={reqHandler}>????????????</EnrollBtn>
            </div>
          </ModalContainer>

          <ModalBackground />
        </>
      ) : null}
    </>
  );
}

export default Walk;
