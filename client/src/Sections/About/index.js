import styled, { keyframes } from "styled-components";
import Lan1 from "../../assets/LandingPage/랜딩1.png";

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
  background-color: #FEBEB0;

`;

const Main = styled.div`
  margin: 0 15rem;
  margin-bottom: 50rem;
  margin-top: 30rem;
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

  color : white;
  width: 60%;
  font-family: "Jua";
`;


const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;



const logoutbtn = styled.div`
  height: 53px;
  width: 148px;
`
const Rectangle6 = styled.div`
  border-radius: 12px;
  height: 53px;
  width: 148px;
  padding: 11px;
  background-color: #3d5a5b;
`
const Text = styled.div`

  text-align: center;
  vertical-align: top;
  font-size: 24px;
  /* font-family: 'Jua'; */
  /* line-height: auto; */
  color: ${({ theme }) => theme.colors.white};
`
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
  width: 50%;
  padding-bottom: 5rem;
  margin-right: 10rem;
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
  /* font-family: "Jua"; */
`

const AboutText = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 100px;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <AboutSection id="about">
      <Main>
        <div>
          <CurvedLine />
        </div>
        <Content>
          <AboutText>
          <logoutbtn>
      <Rectangle6 >
      <Text>퍼피매칭</Text></Rectangle6>
    </logoutbtn>
            <Title>우리집 반려견에게 소중한 산책친구를 만들어주세요</Title>
            <SubText>주소지를 설정하고 내 주변의 반려견 친구들을 찾아주세요</SubText>
          </AboutText>
          <Rocket>
            <img src={Lan1} alt="" width="600" height="400"/>
          </Rocket>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default Contact;
