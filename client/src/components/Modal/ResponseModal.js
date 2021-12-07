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

const ModalContainer = styled(BaseContainer)`
  min-height: 30rem;
  min-width: 30rem;
  background-color: white;

  & img {
    width: 100%;
  }
`;
const ModalBackground = styled(BaseModalBackground)``;

export default Index;
