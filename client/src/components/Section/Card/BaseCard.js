import React from 'react';
import { CardSection } from 'components/Section';
import styled from 'styled-components';

function BaseCard({ children, className }) {
  return (
    <>
      <CardSection className={className}>
        <Ribon className={`card-ribon ${className}`} />
        {children}
      </CardSection>
    </>
  );
}

const Ribon = styled.div`
  position: absolute;
  width: 60px;
  height: 35px;
  background: #eb2632;
  top: 10px;
  left: -16px;

  &:before {
    content: '';
    position: absolute;
    bottom: -16px;
    border: 8px solid #900048;
    border-left: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }

  &:after {
    content: '';
    position: absolute;
    right: -30px;
    border: 17.5px solid #eb2632;
    border-right: 25px solid transparent;
  }

  &.card-ribon.puppyCard {
    @media screen and (max-width: 1000px) {
      top: -40px;
    }
  }
`;

export default BaseCard;
