import styled from 'styled-components';

export const Spinner = styled.div`
  margin: 0 auto;
  border-top: 1rem solid rgba(255, 255, 255, 0.2);
  border-right: 1rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 1rem solid rgba(255, 255, 255, 0.2);
  border-left: 1rem solid #ffffff;
  animation: load 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
