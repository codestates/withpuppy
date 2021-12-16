import React, { useEffect, useState, createContext, useRef } from 'react';
import MypageMain from './';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MypageLogo from 'assets/img/logo/puppyLogo.png';
import PatchingIcon from 'assets/img/icons/patching.png';
import WhiteDog from 'assets/img/icons/whiteDog.png';
import UserCard from 'components/Section/Card/UserCard';
import PuppyCard from 'components/Section/Card/PuppyCard';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Slices/User';
import { getPinpointerInfo } from 'redux/Async/getPinpointerInfo';
import StrollDog from 'assets/LandingPage/산책중멍멍.gif';
import { ModalContainer, ModalBackground } from 'components/Modal';
import { genPinIconType } from 'utils/genPinIconType';
import SendIcon from 'assets/img/icons/Send.png';
import { selectUser } from 'redux/store';
import { parseDate } from 'utils/parseDate';
import { updateMypinMessages } from 'redux/Async/updateMypinMessages';

export const PinContext = createContext(null);

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector(selectUser);
  const chatRef = useRef(null);

  //@ state //////////////////////////////////
  const [pinpointers, setPinpointers] = useState({
    state: 'loading',
    pins: [],
    clickedPin: {},
  });

  const [chatInput, setChatInput] = useState('');

  const getPins = async () => {
    try {
      const {
        data: { pinpointers },
      } = await dispatch(getPinpointerInfo(navigate)).unwrap();

      setTimeout(() => {
        setPinpointers({
          state: 'ready',
          pins: pinpointers,
          clickedPin: {},
        });
      }, 1000);
    } catch (err) {
      navigate('/mypage/reject');
    }
  };

  useEffect(() => getPins(), []);

  //@ handlers //////////////////////////////
  const onHandleResetMessages = () => {
    setPinpointers({
      ...pinpointers,
      clickedPin: {},
    });
  };

  const onHandleChatSubmit = async (e) => {
    e.preventDefault();

    if (!chatInput.length) {
      return;
    }

    try {
      const response = await dispatch(
        updateMypinMessages({
          pinpointerId: pinpointers.clickedPin.pinpointerId,
          text: chatInput,
        }),
      ).unwrap();

      const clikcedPinMessageList = [
        response,
        ...pinpointers.clickedPin.Messages,
      ];

      setPinpointers({
        ...pinpointers,
        clickedPin: {
          ...pinpointers.clickedPin,
          Messages: clikcedPinMessageList,
        },
      });

      setChatInput('');
    } catch (err) {
      navigate('/mypage/reject');

      setPinpointers({
        state: 'loading',
        pins: [],
        clickedPin: {},
      });

      setChatInput('');
    }
  };

  return (
    <>
      {/* chat modal part */}
      {Object.keys(pinpointers.clickedPin).length > 0 && (
        <>
          <ChatModalContainer>
            <ChatSection>
              <ChatTitle className="flex-center-R">
                <img
                  src={genPinIconType(pinpointers.clickedPin.iconType)}
                  alt="iconType"
                />
                <span className="location">
                  {pinpointers.clickedPin.location}
                </span>
              </ChatTitle>

              <ChatsArticle ref={chatRef}>
                {pinpointers.clickedPin.Messages.map((message) => (
                  <MessageContainer
                    className={
                      message.writerId !== userData.id ? 'incomming' : ''
                    }
                    time={parseDate(message.createdAt)}
                  >
                    <p>{message.text}</p>

                    {message.writerId !== userData.id && (
                      <div>
                        <img src={message.thumbImg} alt="writer thumb img" />
                      </div>
                    )}
                  </MessageContainer>
                ))}
              </ChatsArticle>

              <ChatInputContainer onSubmit={onHandleChatSubmit}>
                <input
                  type="text"
                  className="chatInput"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                />
                <button type="submit">
                  <img src={SendIcon} alt="sendIcon" />
                </button>
              </ChatInputContainer>
            </ChatSection>
          </ChatModalContainer>
          <ChatModalBackground onClick={onHandleResetMessages} />
        </>
      )}

      {/* main page */}
      {pinpointers.state === 'loading' ? (
        <MyPageLoading className="flex-center-R">
          <img src={StrollDog} alt="stroll dog" />
        </MyPageLoading>
      ) : (
        <MypageMain className="mypageMain">
          <MypageHeader>
            <img src={MypageLogo} alt="" />
          </MypageHeader>

          <CardContainer className="flex-center-R">
            <PinContext.Provider value={{ pinpointers, setPinpointers }}>
              <UserCard />
            </PinContext.Provider>

            <PuppyCard />
          </CardContainer>

          <MypageBottom>
            <div
              className="pachingContainer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/map';
              }}
            >
              <img src={PatchingIcon} alt="" />
              <span>패칭하러가기</span>
            </div>

            <div
              className="goToHomeContainer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
            >
              <span>홈으로 가기</span>
              <img src={WhiteDog} alt="" />
            </div>
          </MypageBottom>
        </MypageMain>
      )}
    </>
  );
}

//! loading part
const MyPageLoading = styled.main`
  background-color: white;
  height: 100vh;

  & img {
    width: 50%;
    height: 70%;
    min-height: 50rem;

    @media screen and (max-width: 900px) {
      width: 70%;
      height: 50%;
    }

    @media screen and (max-width: 780px) {
      width: 60%;
      height: 50%;
    }

    @media screen and (max-width: 550px) {
      height: 40%;
      min-height: 40rem;
    }
  }
`;

//! chat modal
const ChatModalContainer = styled(ModalContainer)`
  height: 80%;
  min-height: 70rem;
  max-height: 70rem;
  position: fixed;
  background-color: white;
  transform: translate(-50%, -50%);
  animation: ${({ theme }) => theme.animation.showLeft} 0.5s forwards;

  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 10px 0px inset,
    rgba(0, 0, 0, 0.15) 0px 0px 5px 0px inset;

  @media screen and (max-width: 750px) {
    min-height: 60rem;
    max-height: 60rem;
  }
`;

const ChatModalBackground = styled(ModalBackground)`
  backdrop-filter: blur(4px);
  background-color: transparent;
`;

const ChatSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatTitle = styled.div`
  & .location {
    margin-left: 2rem;
  }
  margin-bottom: 1rem;

  @media screen and (max-width: 750px) {
    & img {
      width: 3.5rem;
    }

    & .location {
      margin-left: 1rem;
      font-size: 1.7rem;
    }
  }
`;

const ChatsArticle = styled.article`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  padding: 3.5rem 2.5rem 2rem;
  overflow-y: auto;
  scrollbar-color: red green;

  & > *:not(:first-of-type) {
    margin-top: 5rem;
  }
`;

const MessageContainer = styled.div`
  //! common
  font-size: 1.25rem;
  display: flex;

  & p {
    background-color: ${({ theme }) => theme.colors.secondColor};
    color: white;
    border-radius: 12px 12px 12px 0px;
    padding: 1rem;
    word-break: keep-all;
    max-width: 70%;
    position: relative;

    &:after {
      content: '${({ time }) => time}';
      position: absolute;
      top: -17px;
      left: 5%;
      color: ${({ theme }) => theme.colors.grayThree};
      font-size: 1rem;

      @media screen and (min-width: 1300px) {
        font-size: 1.7rem;
        top: -23px;
      }
    }

    @media screen and (min-width: 1300px) {
      max-width: 60%;
      padding: 2rem;
    }
  }

  //! incomming style
  &.incomming {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 7rem;

    & p {
      background-color: ${({ theme }) => theme.colors.gray5};
      color: ${({ theme }) => theme.colors.pointColor1};
      border-radius: 12px 12px 0 12px;

      &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        transform: rotate(-20deg);
        right: 0;
        border: 7px solid ${({ theme }) => theme.colors.gray5};
        border-left: 7px solid transparent;
        border-bottom: 7px solid transparent;
      }
    }

    & img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      margin-left: 0.5rem;
      transform: translateY(3rem);

      @media screen and (min-width: 1300px) {
        width: 5rem;
        height: 5rem;
        margin-left: 1.5rem;
        transform: translateY(4.5rem);
      }
    }

    @media screen and (min-width: 1000px) {
      margin-bottom: 10rem;
    }
  }

  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1300px) {
    font-size: 2rem;
  }
`;

const ChatInputContainer = styled.form`
  margin: 1rem 0 2rem;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  height: 7rem;
  padding: 1.5rem 2rem;
  border: 1px solid #e8e8e8;
  border-radius: 100px;

  & input {
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 2rem;

    @media screen and (max-width: 750px) {
      font-size: 1.5rem;
    }
  }

  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1.3rem;
    display: flex;
  }

  @media screen and (max-width: 750px) {
    height: 5rem;
  }
`;

const MypageHeader = styled.header`
  text-align: center;
  margin-bottom: 5.5rem;

  & img {
    width: 30rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    & > section {
      width: 80%;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    & .puppyCard {
      margin-top: 5rem;

      & .puppyCardTitle {
        left: 0;
      }
    }
  }
`;

const MypageBottom = styled.section`
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;

  & .pachingContainer {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    user-select: none;

    & > span {
      margin-left: 2rem;
    }
  }

  & .goToHomeContainer {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    user-select: none;

    & > span {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 700px) {
    & img {
      width: 7rem;
    }

    & .pachingContainer {
      & span {
        margin-left: 1.5rem;
        font-size: 2rem;
      }
    }

    & .goToHomeContainer {
      & span {
        margin-right: 1.5rem;
        font-size: 2rem;
      }
    }
  }
`;

export default Index;
