import styled, { keyframes } from 'styled-components/macro';
import Lan2 from 'assets/LandingPage/랜딩2.png';

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
           사회화는 강아지를 새로운 장소, 소리, 경험에 노출시키는 과정을 말합니다. 강아지가 이 세상에 익숙해지도록 돕고 새로운 상황을 자신감있게 대하도록 가르치는 것입니다.
            </SubText>
          </AboutText>

          <Rocket>
            <img src={Lan2} alt="" />
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
  background-color: yellowgreen;
`;

const Main = styled.div`
  margin: 15rem;
  align-items: center;
  background-color: yellow;
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
  background-color: red;
  width: 150rem;
`;

const Rocket = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 5rem;
  margin-right: 10rem;
  animation: ${move} 2.5s ease infinite;
  background-color: tomato;

  & img {
   width: 100%;
   min-width: 200px;
  }

`;
const SubText = styled.h5`
  font-size: 20px;
  line-height: 1.5;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.pointColor2};
  width: 60%;
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 100px;
  background-color: salmon;
`;

export default Contact;

// const Contact = () => {
//   return (
//     <AboutSection>

//         <Content>
//           <Rocket>
//             <img src={Lan2} alt="" width="600" height="600" />
//           </Rocket>

//           <AboutText>
//             <Title>강아지 사회화의 중요성을 알고 계신가요?</Title>
//             <SubText>
//               사회화는 강아지를 새로운 장소, 소리, 경험에 노출시키는 과정을
//               말합니다. 강아지가 이 세상에 익숙해지도록 돕고 새로운 상황을
//               자신감있게 대하도록 가르치는 것입니다.
//             </SubText>
//           </AboutText>
//         </Content>

//     </AboutSection>
//   );
// };

// const move = keyframes`
// 0% { transform: translateY(-5px)         }
//     50% { transform: translateY(10px) translateX(10px)        }
//     100% { transform: translateY(-5px)         }
// `;

// const AboutSection = styled.div`
//   width: 100%;
//   background-color: yellowgreen;
// `;

// const Title = styled.h1`
//   font-size: calc(2rem + 1vw);
//   line-height: 1.5;
//   color: white;
//   width: 100%;
//   background-color: black;
// `;

// const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100vw;
//   background-color: white;

// `;

// const Rocket = styled.div`
//   display: flex;
//   width: 10%;
//   padding-bottom: 5rem;
//   margin-left: 14rem;
//   animation: ${move} 2.5s ease infinite;
//   @media only Screen and (max-width: 40em) {
//     width: 50vw;
//     padding-bottom: 0;
//   }
// `;
// const SubText = styled.h5`
//   font-size: 20px;
//   line-height: 1.5;
//   padding: 1rem 0;
//   background-color: ;
//   color: ${({ theme }) => theme.colors.pointColor2};
//   width: 60%;
//   font-family: 'Jua';
// `;

// const AboutText = styled.div`
//   width: 50%;
//   position: relative;
//   margin-bottom: 10rem;

//   @media only Screen and (max-width: 40em) {
//     width: 100%;
//   }
// `;

// export default Contact;
