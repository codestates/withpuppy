import React from 'react';
import {
  ModalContainer as BaseContainer,
  ModalBackground as BaseModalBackground,
} from '.';
import styled from 'styled-components';

function Index({ children }) {
  return (
    <>
      <ModalContainer className="flex-center-C">{children}</ModalContainer>
      <ModalBackground />
    </>
  );
}

export const ModalContainer = styled(BaseContainer)`
  min-height: 30rem;
  min-width: 30rem;
  background-color: white;

  & span {
    font-size: 2rem;
  }

  & img {
    width: 100%;
  }

  & img.errorImg {
    margin-top: 2rem;
    width: 80%;
    max-width: 20rem;
  }
`;
const ModalBackground = styled(BaseModalBackground)`
  width: 110%;
  height: 110%;
  overflow: hidden;
`;

export default Index;
