import React from 'react';
import styled from 'styled-components';
import { BaseBtn } from './';

function Index() {
  return <LoginBtn onClick={() => {}}>로그인</LoginBtn>;
}

export const LoginBtn = styled(BaseBtn)`
  width: 50%;
  min-height: 5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  border-radius: 7px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.pointColor2};
  }

  &:active {
    transform: translateY(2px);
  }
`;

export default Index;
