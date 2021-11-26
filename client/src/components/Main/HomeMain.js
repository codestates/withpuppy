import React from 'react';
import { BaseMain } from './index';
import { BaseSection } from 'components/Section';
import styled from 'styled-components';
import LienSection1 from 'assets/img/kakao/lien-section1.png';
import LienSection2 from 'assets/img/kakao/lien-section2.jpeg';
import LienSection3 from 'assets/img/kakao/lien-section3.png';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <HomeMain>
      {/* <HomeSection className="lien-section">
        <img src={LienSection1} alt="" />
        <h1>농부 라이언은 스벅러입니다..</h1>
      </HomeSection>

      <HomeSection className="lien-section">
        <img src={LienSection2} alt="" />
        <h1>
          <span>하지만 매번 놓치는 이벤트</span>
          <span>커피콩을 찾으러 돌아다니는 유목민 생활...</span>
          <span>어떻게 할 수 없을까요</span>
        </h1>
      </HomeSection>

      <HomeSection className="lien-section">
        <img src={LienSection3} alt="" />
        <h1>
          <span>그래서 출시했습니다!</span>
          <span>스벅러들을 위한 집단지성의 결정체!</span>
          <span>지금 당장 물어보세요!</span>
        </h1>
      </HomeSection>

      <HomeSection className="lien-section">
        <Link to="/map">런칭하기</Link>
      </HomeSection> */}
    </HomeMain>
  );
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

const HomeSection = styled(BaseSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3rem;

  & img {
    width: 45%;
    object-fit: contain;
  }

  & h1 {
    width: 40%;
    font-size: 1.7rem;
    line-height: 1.3;
    text-align: center;

    & span {
      font-size: 1.3rem;
      display: block;
    }

    & span:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  transition: box-shadow 0.5s;

  //@ media /////////////////////////
  ${({ theme }) => theme.mediaQuery.tablet} {
    & h1 {
      font-size: 3rem;

      & span {
        font-size: 2rem;
      }
    }
  }
`;

export default Index;
