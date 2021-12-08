import React, { useRef, useEffect, useState } from 'react';
import MapHeader from 'components/Header/Homeheader';
import { useDispatch } from 'react-redux';
import { addMap } from 'redux/Slices/Map';
import {
  Btn,
  MapMain,
  MapContainer,
  UserInfoContainer,
  UserCard,
  UserInfo,
  Reply,
  DogCard,
} from './MapStyle';
import CustomOverlayMap from 'components/CustomOverlay/CustomOverlayMap';
import Walk from 'components/Overlay/Walk';

function Index() {
  const mapRef = useRef(null);
  const { kakao } = window;
  const dispatch = useDispatch();

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(37.529789809685475, 126.96470201104091),
      level: 7,
    };

    try {
      const map = new kakao.maps.Map(mapRef.current, mapOptions);
      dispatch(addMap(map));
    } catch (err) {
      console.log(err);
    }

    return () => {};
  }, []);

  const [isWalkOpen, setIsWalkOpen] = useState(false);
  const openWalkHandler = () => {
    setIsWalkOpen(!isWalkOpen);
    console.log('isWalkOpen', isWalkOpen);
  };

  return (
    <>
      <MapHeader className="mapHeader" />
      <MapMain>
        <MapContainer ref={mapRef} className="MapContainer">
          {/* <CustomOverlayMap></CustomOverlayMap> */}
          <Btn onClick={openWalkHandler} isWalkOpen={isWalkOpen}>
            산책등록
          </Btn>
          {isWalkOpen === true ? <Walk></Walk> : null}
        </MapContainer>
        <UserInfoContainer className="UserInfoContainer">
          <UserCard className="UserCard">
            <UserInfo className="flex-center-R UserInfo">hi</UserInfo>
            <Reply className="flex-center-C Reply">hello</Reply>
          </UserCard>
        </UserInfoContainer>
      </MapMain>
    </>
  );
}

export default Index;
