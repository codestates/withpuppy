import React from 'react';
import styled from 'styled-components/macro';

function Index({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  padding: 1rem 3rem;
`;

export default Index;
