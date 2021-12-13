import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.section`
  width: 50%;
  min-width: 50rem;
  height: 50%;
  min-height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 5px dashed yellow;
  background-color: lightyellow;
`;

const Title = styled.span`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const Image = styled.div`
  width: 50%;
  height: 50%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: ${({ styleOptions }) =>
      !styleOptions?.rotate ? 'none' : ' rotate_image 10s linear infinite'};
    transform-origin: 50% 50%;
    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

function PageLayout({ title, img, styleOptions }) {
  return (
    <Main>
      <Container>
        <Title>{title}</Title>
        <Image styleOptions={styleOptions}>
          <img src={img} alt="stateImg" />
        </Image>
      </Container>
    </Main>
  );
}

export default PageLayout;
