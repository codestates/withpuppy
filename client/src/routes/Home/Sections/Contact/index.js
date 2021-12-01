import styled, { keyframes } from 'styled-components';
import Lan2 from 'assets/LandingPage/랜딩2.png';

const Contact = () => {
  return (
    <AboutSection id="about">
      <Main>
        <div>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={Lan2} alt="" width="600" height="600" />
          </Rocket>
          <AboutText>
            <Title>강아지 사회화의 중요성을 알고 계신가요?</Title>
            <SubText>
              사회화는 강아지를 새로운 장소, 소리, 경험에 노출시키는 과정을
              말합니다. 강아지가 이 세상에 익숙해지도록 돕고 새로운 상황을
              자신감있게 대하도록 가르치는 것입니다.
            </SubText>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
`;

const Main = styled.div`
  /* margin: 0 15rem; */
  margin-top: 5rem;
  margin-bottom: 50rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.5;
  /* padding: 1rem 0; */

  color: white;
  width: 80%;
  font-family: 'Jua';
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  width: 10%;
  padding-bottom: 5rem;
  margin-left: 14rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;
const SubText = styled.h5`
  font-size: 20px;
  line-height: 1.5;
  padding: 1rem 0;

  color: ${({ theme }) => theme.colors.pointColor2};
  width: 60%;
  font-family: 'Jua';
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 10rem;

  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

export default Contact;
