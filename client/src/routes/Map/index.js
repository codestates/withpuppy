/*global kakao*/
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import Map from './Map';
// import Walk from 'components/Overlay/Walk';
// import CustomOverlayMap from 'components/CustomOverlay/CustomOverlayMap';

function Index() {
  const mapRef = useRef(null);
  const { kakao } = window;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const mapOptions = {
          center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
          level: 7,
        };

        new kakao.maps.Map(mapRef.current, mapOptions);
        return () => {};
      },
      () => console.log('cannot get Map!!!'),
    );
  }, []);

  return <TestMapContainer ref={mapRef}>잠시만 기다려주세요~</TestMapContainer>;
}

const TestMapContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Index;
