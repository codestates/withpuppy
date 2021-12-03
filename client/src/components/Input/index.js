import React, { useRef } from 'react';
import styled from 'styled-components';

function Index({ label, className, type, placeholder }) {
  const inputRef = useRef(null);

  return (
    <ErrorContainer
      onClick={(e) => {
        inputRef.current.focus();
      }}
    >
      <InputBarContainer className={className}>
        <span className="inputLabel">{label}</span>
        <input ref={inputRef} type={type} placeholder={placeholder} />
      </InputBarContainer>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  margin: 2.5rem 0;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.thirdColor};
  position: relative;

  &::before {
    content: '유효하지 않음';
    position: absolute;
    font-size: 1.3rem;
    top: -2.6rem;
    color: ${({ theme }) => theme.colors.thirdColor};
  }
`;

const InputBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  & span.inputLabel {
    font-size: 1.3rem;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.thirdColor};
    flex: 0.25;
  }

  & input {
    border: none;
    width: 70%;
    height: 100%;
    background-color: transparent;
    font-size: 1.6rem;
    outline: none;
    flex: 0.75;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pointColor2};
  }
`;

export default Index;
