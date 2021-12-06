/*global kakao*/
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Map from './Map';
import Walk from 'components/Overlay/Walk';
import CustomOverlayMap from 'components/CustomOverlay/CustomOverlayMap';

function Index() {
  return (
    <>
      <Walk />
      {/* <CustomOverlayMap /> */}
      <Map></Map>
    </>
  );
}

export default Index;
