import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import MapHeader from 'components/Header/Homeheader';
import { useDispatch } from 'react-redux';
import { addMap } from 'redux/Slices/Map';
import Example from './Example';

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

  return (
    <>
      <MapHeader className="mapHeader" />
      <MapMain>
        <MapContainer ref={mapRef} className="MapContainer"></MapContainer>

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

const MapMain = styled.main`
  display: flex;
  height: calc(100vh - 7rem);

  & .MapContainer {
    flex: 0.65;
  }

  & .UserInfoContainer {
    flex: 0.35;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 102rem;

    & .MapContainer {
      min-height: 20rem;
      max-height: 35rem;
    }

    & .UserInfoContainer {
      flex: 1;
    }
  }

  @media screen and (min-width: 1400px) {
    & .MapContainer {
      flex: 0.75;
    }

    & .UserInfoContainer {
      flex: 0.25;
    }
  }
`;

const MapContainer = styled.div`
  min-height: 50rem;
`;

const UserInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondColor};
`;

//# When pin clicked
const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 50rem;
  padding: 1.3rem;
  background-color: white;

  & .UserInfo {
    background-color: white;
    flex: 0.3;
  }

  & .Reply {
    background-color: red;
    flex: 0.7;
  }
`;

const UserInfo = styled.div``;

const Reply = styled.div``;

//# Before pin clicked
const DogCard = styled.section``;

export default Index;
