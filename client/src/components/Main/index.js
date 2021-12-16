import styled from 'styled-components';

export default styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  transform: translateY(6rem);

  &.mypageMain {
    padding: 2rem;
    transform: translateY(0);
    height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
