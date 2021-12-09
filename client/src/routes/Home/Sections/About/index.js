import styled, { keyframes } from 'styled-components/macro';
import Lan1 from 'assets/LandingPage/랜딩1.png';

const Contact = () => {
  return (
    <AboutSection className="flex-center-C">
      <Main>
        <Content>
          <AboutText>
            <Rectangle6>
              <Text>퍼피매칭</Text>
            </Rectangle6>
            <Title>우리집 반려견에게 소중한 산책친구를 만들어주세요</Title>
            <SubText>
              주소지를 설정하고 내 주변의 반려견 친구들을 찾아주세요
            </SubText>
          </AboutText>

          <Rocket>
            <img src={Lan1} alt="" />
          </Rocket>
        </Content>
      </Main>
    </AboutSection>
  );
};


//애니메이션 무빙
const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const AboutSection = styled.section`
  width: 100%;
`;

const Main = styled.div`
  margin: 15rem;
  align-items: center;
  
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.5;
  padding: 1rem 0;
  color: white;
  width: 60%;

`;

const Rectangle6 = styled.div`
  border-radius: 12px;
  height: 53px;
  width: 148px;
  padding: 11px;
  background-color: #3d5a5b;
`;
const Text = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 24px;
  /* font-family: 'Jua'; */
  /* line-height: auto; */
  color: ${({ theme }) => theme.colors.white};
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 5rem;
  margin-right: 10rem;
  animation: ${move} 2.5s ease infinite;
  
  & img {
   width: 100%;
   min-width: 200px;
  }
  @media only Screen and (max-width: 1200px) {
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
  /* font-family: "Jua"; */
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 100px;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

export default Contact;
