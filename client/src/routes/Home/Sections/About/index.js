import styled, { keyframes } from 'styled-components/macro';
import Lan1 from 'assets/LandingPage/랜딩1.png';

const Contact = () => {
  return (
    <AboutSection className="flex-center-C">
      <Main>
        <Content>
          <AboutText>
            <Rectangle6>
              <Text>커뮤니티</Text>
            </Rectangle6>
            <Title>우리집 반려견에게 소중한 산책친구를 만들어주세요 !</Title>
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
  padding-left: 10px;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

const Main = styled.div`
  margin: 15rem;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 1.5;
  padding: 1rem 0;
  color: white;
  width: 100%;
  word-break: keep-all;
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
  color: ${({ theme }) => theme.colors.white};
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150rem;
  @media screen and (max-width: 1300px) {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    }
`;

const Rocket = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  max-width:100%;
  height:auto;

  & img {
   width: 100%;
   max-width:100%;
   height:auto;
   min-width: 200px;
  }
  @media screen and (max-width: 1300px) {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    width: 500px;
    }
`;
const SubText = styled.h5`
  font-size: 20px;
  line-height: 1.5;
  padding: 1rem 0;

  color: ${({ theme }) => theme.colors.pointColor2};
  width: 100%;
  word-break: keep-all;
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 50px;
  width: 500px;
`;

export default Contact;
