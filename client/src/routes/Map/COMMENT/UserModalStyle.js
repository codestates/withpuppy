//! 댓글 클릭시 생성되는 모달창의 스타일컴포넌트입니다.

import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import je from '../../../assets/img/profile/예수님.png';
import Liked from '../Liked';

export const UserModalStyle = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal],
  );
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper className="flex-center-C" showModal={showModal}>
              <ModalContent>
                <Div className="flex-center-C">
                  <UserImg>
                    <img src={je} alt="" width="80px" />
                  </UserImg>
                  <Liked></Liked>
                </Div>
                <UserCard className="flex-center-C">
                  <Text>닉네임</Text>
                  <Text>강아지 이름</Text>
                  <Text>강아지 소개글</Text>
                </UserCard>
                {/* <Text>로그인 후 이용해주세요!</Text>
                <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/';
                      }} >login
                          </Button> */}
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
const Div = styled.div`
  /* position: fixed;  */
  /* left: 0; 
right: 0; 
top: 0;  */
  text-align: center;
  margin: 1rem;
`;
const UserImg = styled.div``;

const UserCard = styled.div`
  margin-top: 3rem;

  border-radius: 12px;
  height: 280px;
  width: 240px;
  background-color: white;
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 50;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20000;
`;

const ModalWrapper = styled.div`
  width: 300px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #febeb0;
  color: #000;

  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

//해당 유저 이미지
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: #000;
`;
const Text = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 2rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  /* button {
    border-radius: 10px;
    background: #FEBEB0;
    color: #fff;
    border: none;
  } */
`;

const Button = styled.div``;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
