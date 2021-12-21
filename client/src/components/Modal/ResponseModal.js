import React from 'react';
import {
  ModalContainer as BaseContainer,
  ModalBackground as BaseModalBackground,
} from '.';
import styled from 'styled-components';

function Index({ children, className }) {
  return (
    <>
      <ModalContainer className={`flex-center-C ${className ? className : ''}`}>
        {children}
      </ModalContainer>
      <ModalBackground className={className} />
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

  &.loading img {
    width: 30rem;
    max-height: 30rem;
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

  &.loading {
    backdrop-filter: blur(4px);
    background-color: transparent;
  }
`;

export default Index;
