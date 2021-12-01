import React, { useState } from 'react';
import { BaseMain } from './index';
import styled from 'styled-components';

function Index() {
  return <HomeMain></HomeMain>;
}

const HomeMain = styled(BaseMain)`
  & .lien-section:nth-child(2) {
    flex-direction: row-reverse;
  }

  & > *:last-child {
    height: 20rem;
    display: flex;
    justify-content: center;
  }

  & *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default Index;
