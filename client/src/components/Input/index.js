import styled from 'styled-components';

export const BaseInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  min-height: 5rem;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  margin: 2.5rem 0;
  cursor: pointer;
  position: relative;

  & span.inputLabel {
    font-size: 1.3rem;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.thirdColor};
    flex: 0.25;
    text-transform: uppercase;
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
