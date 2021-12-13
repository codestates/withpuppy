import styled, { keyframes } from 'styled-components';
import Lan3 from 'assets/LandingPage/랜딩3.png';
import PuppyLogo from 'assets/img/logo/puppyLogo.png';
import { BaseBtn } from 'components/Button';

const Services = () => {
  return (
    <AboutSection className="flex-center-C" >
      <Main>
       <Content>
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
        </Content>
      </Main>
    </AboutSection>
  );
};
const Content = styled.div`
   justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1300px) {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    }
`

const Logo = styled.div`
  width: 100px;
  height: 100px;
  line-height: 1.5;
  padding: 1rem 0;
  margin-bottom: 5rem;
  margin-top: 18rem;
  color: white;
  width: 100%;

`;

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const AboutSection = styled.section`
  text-align: center; 
  justify-content: center;  
  margin-bottom: 3rem;
`;

const Main = styled.div`
  display: inline;

`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 1.5;
  color: white;
  width: 100%;
  padding: 1rem 0;
  align-items: center;
  margin-bottom: 5rem;
  word-break: keep-all;

  @media screen and (max-width: 1300px) {
      font-size: 30px;
    }
`;

const Rocket = styled.div`
  align-items: center;
  animation: ${move} 2.5s ease infinite;
  margin-bottom: 10rem;

  & img {
   width: 100%;
   min-width: 200px;
  }
  @media screen and (max-width: 1300px) {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    width: 400px;
    height: 300px;
    }
`;

const Group2 = styled(BaseBtn)`
  margin-bottom: 5rem;
  text-align: center; 
  justify-content: center;
  margin-bottom: 5rem;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    background-color: #e87676;
  }

  &:active {
    transform: translateY(2px);
  }

  @media screen and (max-width: 1300px) {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    width: 250px;
    height: 80px;
    }
`;
const Rectangle28 = styled.div`
  border-radius: 12px;
  height: 100px;
  width: 590px;
  text-align: center;
  justify-content: center;
  line-height: 100px;
  text-align: center; 
  justify-content: center;
`;
const Text = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 3rem;
  user-select: none;
  text-align: center; 
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 1300px) {
      font-size: 20px;
    }
`;

export default Services;
