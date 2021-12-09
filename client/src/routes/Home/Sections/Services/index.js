import styled, { keyframes } from 'styled-components';
import Lan3 from 'assets/LandingPage/랜딩3.png';
import PuppyLogo from 'assets/img/logo/puppyLogo.png';

const Services = () => {
  return (
    <AboutSection >
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
            <Rectangle28 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/map';
                  }}
                >
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




  justify-content: center;


`;

const Main = styled.div`

  display: inline;

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
  height: 100%;
  width: 100%;
  margin-bottom: 5rem;
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
