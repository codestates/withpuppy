import React from "react";
import styled from "styled-components";
import Lan3 from "../assets/랜딩3.png";
import "./global.css";
import PuppyLogo from "../assets/puppyLogo.png";

export const Services = () => {
  return (
    <AboutSection className="flex-center-C">
      <Main>
        <Content>
          <Logo>
            <Img src={PuppyLogo} />
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
  text-align: center;
`;

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

const Img = styled.img`
  display: block;
  margin: 0px auto;
`;

const Group2 = styled.button`
  background-color: #3d5a5b;
  margin-bottom: 5rem;
  text-align: center;
  justify-content: center;
  margin-bottom: 5rem;
  border-radius: 30px;

  border: none;
  cursor: pointer;
  /* color: #fff; */
  padding: 1.05rem;

  &:hover {
    background-color: #f7f1ed;
    color: #3d5a5b;
  }

  &:active {
    transform: translateY(2px);
  }

  @media screen and (max-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 250px;
    height: 80px;
  }
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

const Rectangle28 = styled.div`
  border-radius: 12px;
  height: 100px;
  width: 590px;
  text-align: center;
  justify-content: center;
  line-height: 100px;
`;
