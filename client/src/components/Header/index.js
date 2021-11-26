import React from 'react';
import styled from 'styled-components';

export const BaseHeader = styled.header`
  width: 100%;
  height: 6rem;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s, height 0.5s;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.5rem;
`;
