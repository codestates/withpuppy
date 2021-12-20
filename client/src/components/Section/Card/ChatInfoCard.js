import React from 'react';
import styled from 'styled-components';
import StarIcon from 'assets/img/icons/lightStar.png';

function ChatInfoCard({ mouseOverThumbInfo }) {
  const { message } = mouseOverThumbInfo;
  return (
    <MessageThumbnailContainer mouseOverThumbInfo={mouseOverThumbInfo}>
      <div className="thumbnail">
        <img src={message?.thumbImg} alt="" />
      </div>

      <div className="likes flex-center-R">
        <img src={StarIcon} alt="" />
        <span>{message?.likes}</span>
      </div>
      <div className="info-detail-container">
        <div className="wrapper nickName">
          <span className="title">닉네임</span>
          <span className="value">{message?.nickname}</span>
        </div>
        <div className="wrapper puppyName">
          <span className="title">강아지 이름</span>
          <span className="value">{message?.puppyName}</span>
        </div>
        <div className="wrapper puppy-introduction">
          <span className="title">강아지 소개글</span>
          <span className="value">
            {message?.introduction ? message?.introduction : '왕왕!'}
          </span>
        </div>
      </div>
    </MessageThumbnailContainer>
  );
}

const MessageThumbnailContainer = styled.div`
  visibility: ${({ mouseOverThumbInfo }) =>
    Object.keys(mouseOverThumbInfo).length ? 'visible' : 'hidden'};

  position: absolute;
  top: ${({ mouseOverThumbInfo }) => mouseOverThumbInfo.top - 110 + 'px'};
  left: ${({ mouseOverThumbInfo }) => mouseOverThumbInfo.left - 100 + 'px'};

  width: 15.5rem;
  max-height: 22rem;
  border: 1px solid #615353;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  padding: 0.7rem;

  & .thumbnail {
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 1rem;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & .likes {
    background-color: white;
    padding: 0.5rem;
    display: flex;
    border-radius: 10px;
    margin-bottom: 0.5rem;

    & img {
      width: 15px;
      margin-right: 0.5rem;
    }
    & span {
      padding-top: 2px;
      line-height: 1;
    }
  }

  & .info-detail-container {
    background-color: white;
    border-radius: 12px;
    padding: 0.5rem 0.8rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    & .wrapper {
      display: flex;
      margin-bottom: 0.5rem;
      position: relative;

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0px;
        border-bottom: 1px solid gray;
      }
    }

    & .title {
      flex: 0.5;
      word-break: keep-all;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .value {
      flex: 0.5;
      word-break: keep-all;
    }
  }

  @media screen and (min-width: 1000px) {
    top: ${({ mouseOverThumbInfo }) => mouseOverThumbInfo.top - 80 + 'px'};
    left: ${({ mouseOverThumbInfo }) => mouseOverThumbInfo.left - 150 + 'px'};
    width: 23rem;
    max-height: 30rem;
    font-size: 1.5rem;

    & .thumbnail {
      width: 7rem;
      height: 7rem;
      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 1400px) {
    top: ${({ mouseOverThumbInfo }) => mouseOverThumbInfo.top - 150 + 'px'};
    left: ${({ mouseOverThumbInfo }) => mouseOverThumbInfo.left - 170 + 'px'};
  }
`;

export default ChatInfoCard;
