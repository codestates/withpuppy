import React from 'react';
import styled from 'styled-components';

function Logs() {
  return (
    <LogsContainer>
      {' '}
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </LogsContainer>
  );
}

const LogsContainer = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  border-radius: 12px;
  height: 100rem;
  overflow-y: auto;
`;

export default Logs;
