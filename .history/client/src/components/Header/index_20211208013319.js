import React from 'react';
import styled from 'styled-components';

export const BaseHeader = styled.header`
  width: 100%;
  height: 7%;
  min-height: 7rem;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s, height 0.5s;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.mainColor};
  &.MapHeader {
    position: relative;
    background-color: white;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.25);
  }
  font-size: 1.5rem;
`;
