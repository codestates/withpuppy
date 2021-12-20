import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CompleteBtn } from "./CompleteBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { EditBtn } from "./EditBtn";
import Kakao from "../assets/카카오.png";
import female from "../assets/female.png";

export const PuppyCard = ({ complete }) => (
  <CardSection className="puppyCard">
    <Title>내 정보</Title>
    <PuppyInfoContainer className="flex-center-C">
      <ThumbnailContainer>
        <img src={Kakao} alt="kakao" width="150" height="150" />
        <FontAwesomeIcon icon={faCog} className="cog" size="2x" />
      </ThumbnailContainer>
      <CardInputForm>
        <CardInputContainer>
          <div className="title">강아지 이름</div>
          <div className="value">복실이</div>
        </CardInputContainer>
        <CardInputContainer>
          <div className="title">강아지 성별</div>
          <div className="value">여자</div>
        </CardInputContainer>
        <CardInputContainer>
          <div className="title">강아지 나이</div>
          <div className="value">2살</div>
        </CardInputContainer>
        <CardInputContainer>
          <div className="title">강아지 견종</div>
          <div className="value">비숑프리제</div>
        </CardInputContainer>
        <CardInputContainer>
          <div className="title">소개글</div>
          <div className="value">아주 귀여운 복실이.</div>
        </CardInputContainer>
      </CardInputForm>
      {complete ? <EditBtn /> : <CompleteBtn />}
    </PuppyInfoContainer>
  </CardSection>
);

PuppyCard.propTypes = {
  complete: PropTypes.shape({}),
};

PuppyCard.defaultProps = {
  complete: true,
};

export const CardSection = styled.section`
  width: 45%;
  min-width: 40rem;
  height: 50rem;
  min-height: 55rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 4px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 0 2rem 2rem 2rem;
  position: relative;

  & > span {
    position: absolute;
    top: -8%;
    color: white;
    font-size: 2.5rem;
    &.puppyCardTitle {
      right: 0;
    }
  }
`;

export const PuppyInfoContainer = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Title = styled.span`
  color: #f7f1ed;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: "Jua";
`;

export const CardInputForm = styled.form`
  width: 80%;
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  text-align: center;
  margin-top: 3rem;
`;

export const CardInputContainer = styled.div`
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  line-height: 1;
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
  font-family: "Jua";

  & .title {
    flex: 0.4;
    font-family: "Jua";
  }

  & .value {
    flex: 0.6;
    font-size: 3rem;
    color: #3d5a5b;
    font-family: "Jua";

    &.email,
    &.phone {
      font-size: 2rem;
      font-family: "Jua";
    }
  }

  & span {
    display: inline-block;
    width: 6rem;
    font-family: "Jua";
  }
`;

const ThumbnailContainer = styled.div`
  position: relative;

  & > label {
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    cursor: pointer;

    & img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &:before {
    color: #e97676;
    width: 200%;
    position: absolute;
    top: -25%;
    left: -40%;
    font-size: 1.5rem;
  }

  & svg {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #2f365f;
  }
`;
