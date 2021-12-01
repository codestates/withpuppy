import styled, { keyframes } from 'styled-components';
import Lan3 from 'assets/LandingPage/랜딩3.png';
import PuppyLogo from 'assets/img/logo/puppyLogo.png';

const Services = () => {
  return (
    <AboutSection id="about">
      <Main>
        <>
          <Logo>
            <img src={PuppyLogo} />
          </Logo>
          <Title>우리 동네 강아지들이 모두 모인 곳</Title>
          <Rocket>
            <img src={Lan3} alt="" width="600" height="400" />
          </Rocket>
          <Group2>
            <Rectangle28>
              <Text>페칭하러 가기</Text>
            </Rectangle28>
          </Group2>
        </>
      </Main>
    </AboutSection>
  );
};

const Logo = styled.div`
  width: 100px;
  height: 100px;
  font-size: calc(2rem + 1vw);
  line-height: 1.5;
  padding: 1rem 0;
  margin-left: 8rem;
  margin-top: 55rem;
  color: white;
  width: 100%;
`;

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #febeb0;
`;

const Main = styled.div`
  margin-top: 50rem;
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
  padding: 1rem 0;

  color: white;
  width: 100%;
  font-family: 'Jua';
`;

const Rocket = styled.div`
  align-items: center;
  min-height: 100vh;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

// const Group2: React.VFC = () => {
//     return (
//       <Group2>
//         <Rectangle28 />
//         <Text>페칭하러 가기</Text>
//       </Group2>
//     )
//   }

const Group2 = styled.div`
  height: 100px;
  width: 590px;
`;
const Rectangle28 = styled.div`
  border-radius: 12px;
  height: 100px;
  width: 590px;
  text-align: center;
  justify-content: center;
  background-color: #e87676;
  line-height: 100px;
`;
const Text = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 4rem;
  user-select: none;

  color: ${({ theme }) => theme.colors.white};
`;

export default Services;
