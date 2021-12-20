import React from "react";
import styled from "styled-components";
import Lan2 from "../assets/랜딩2.png";
import "./global.css";

export const Contact = () => {
  return (
    <AboutSection className="flex-center-C">
      <Main>
        <Content>
          <Rocket>
            <img src={Lan2} alt="" />
          </Rocket>
          <AboutText>
            <Rectangle6>
              <Text>퍼피매칭</Text>
            </Rectangle6>
            <Title>강아지 사회화의 중요성을 알고 계신가요 ?</Title>
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

const AboutSection = styled.section`
  width: 98.9%;
  padding-left: 10px;
  background-color: #febeb0;
  height: 30%;
`;

const Main = styled.div`
  margin: 10rem;
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
  padding: 5px;
  background-color: #3d5a5b;
  text-align: center;
  justify-content: center;
  line-height: 50px;
`;

const Text = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 24px;
  color: white;
  margin-top: 3px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150rem;
  @media screen and (max-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 5rem;
  max-width: 100%;
  height: auto;

  & img {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-width: 200px;
  }
  @media screen and (max-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
  }
`;

const SubText = styled.h5`
  font-size: 20px;
  line-height: 1.5;
  padding: 1rem 0;
  color: #2f365f;
  width: 100%;
  word-break: keep-all;
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 50px;
  width: 500px;
`;
