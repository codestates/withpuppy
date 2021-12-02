import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

function Index() {
  const mapRef = useRef(null);
  const { kakao } = window;

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(37.566815192716994, 126.97865226139427),
      level: 7,
    };

    new kakao.maps.Map(mapRef.current, mapOptions);
    return () => {};
  }, []);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords }) => {
  //       const mapOptions = {
  //         center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
  //         level: 7,
  //       };

  //       new kakao.maps.Map(mapRef.current, mapOptions);
  //       return () => {};
  //     },
  //     () => console.log('cannot get Map!!!'),
  //   );
  // }, []);

  const TestMapContainer = styled.div`
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <TestMapContainer ref={mapRef}>잠시만 기다려주세요~</TestMapContainer>;
}

export default Index;
